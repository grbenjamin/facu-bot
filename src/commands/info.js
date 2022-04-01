import { SlashCommandBuilder } from '@discordjs/builders';

const command = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Responde con información de la materia especificada')

export const data = command;
export async function execute(interaction) {
	await interaction.reply('test');
}
