const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, cooldowns, Discord, escapeRegex));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args, client, cooldowns, Discord, escapeRegex));
	}
}
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const cooldowns = new Discord.Collection();

client.login(token);