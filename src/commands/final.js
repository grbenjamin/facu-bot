import { SlashCommandBuilder } from '@discordjs/builders';

const command = new SlashCommandBuilder()
	.setName('final')
	.setDescription('Responde con un final de la materia especificada');

export const data = command;
export async function execute(interaction) {
	await interaction.reply('test');
}
