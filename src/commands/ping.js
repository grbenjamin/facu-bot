const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Contesta con pong'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
