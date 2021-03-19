module.exports = {
	name: 'exit',
	description: 'Kills the Node process, but when using PM2 (opens new window), it will restart the process whenever it gets killed.',
	execute(message) {
		const member = message.member;
		if (member.roles.cache.has('733671648405880833')) {
			process.exit();
		}
		else {
			return message.reply('You can not do this!');
		}
	},
};