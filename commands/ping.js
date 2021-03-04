module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send(`Websocket heartbeat: ${message.client.ws.ping}ms.`);
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
		});
	},
};