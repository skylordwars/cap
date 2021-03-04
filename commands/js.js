module.exports = {
	name: 'js',
	description: 'Show the progress of advancing in JavaScript,',
	execute(message, args) {
		const js = '24%';
		message.channel.send('Progress of learning JavaScript: ' + js);
	},
};