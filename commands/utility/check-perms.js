module.exports = {
	name: 'check-perms',
	description: 'know if one of a member\'s roles has a permission enabled.',
	execute(message) {
		const exampleEmbed = {
			color: 0x0099ff,
			title: 'Some title',
			url: 'https://discord.js.org',
			author: {
				name: 'Some name',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
				url: 'https://discord.js.org',
			},
			description: 'Some description here',
			thumbnail: {
				url: 'https://i.imgur.com/wSTFkRM.png',
			},
			fields: [
				{
					name: 'Regular field title',
					value: 'Some value here',
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: false,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
				{
					name: 'Inline field title',
					value: 'Some value here',
					inline: true,
				},
			],
			image: {
				url: 'https://i.imgur.com/wSTFkRM.png',
			},
			footer: {
				text: 'Some footer text here',
				icon_url: 'https://i.imgur.com/wSTFkRM.png',
			},
		};

		message.channel.send({ embed: exampleEmbed });
	},
};