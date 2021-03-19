module.exports = {
	name: 'error',
	execute(message, Discord) {
		process.on('unhandledRejection', error => {
			console.error('Unhandled promise rejection:', error);
		});
		process.on('unhandledRejection', error => {
			console.error('Unhandled promise rejection:', error);
		});
		message.delete().catch(error => {
			if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
				console.error('Failed to delete the message:', error);
			}
		});
	},
};