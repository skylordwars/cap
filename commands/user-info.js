module.exports = {
	name: 'user-info',
	description: 'Display info about yourself or another user.',
	execute(message, args) {
		if (!message.mentions.users.size) {
			message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nDate of Creation: ${message.author.createdAt}`);
		}
		else {
			const taggedUser = message.mentions.users.first();
			message.channel.send(`Username: ${taggedUser.username}\nID: ${taggedUser.id}\nDate of Creation: ${taggedUser.createdAt}`);
		}
	},
};