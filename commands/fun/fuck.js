const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuck')
		.setDescription('Replies with a fuck'),
	async execute(interaction) {
		await interaction.reply(':middle_finger:');
	},
};