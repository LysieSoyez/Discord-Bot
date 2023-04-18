const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tg')
		.setDescription('Replies with a no-mouth smiley'),
	async execute(interaction) {
		await interaction.reply(':no_mouth:');
	},
};