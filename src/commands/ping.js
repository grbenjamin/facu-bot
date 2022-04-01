import { SlashCommandBuilder } from '@discordjs/builders';

const command = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Contesta con pong');

export const data = command;
export async function execute(interaction) {
	await interaction.reply('Pong!');
}
