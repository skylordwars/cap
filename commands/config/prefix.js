const { prefix } = require('../../config.json');

module.exports = {
	name: 'prefix',
	description: 'Provides help regarding prefix.',
	permissions: 'MANAGE_MESSAGES',
	execute(message) {
		message.channel.send(`You can either ping me or use \`${prefix}\` as my prefix.`);
	},
};