import { SlashCommandBuilder } from '@discordjs/builders';

const command = new SlashCommandBuilder()
	.setName('resumen')
	.setDescription('Responde con un resumen de la materia especificada')
	.addStringOption(option =>
		option
			.setName('materia')
			.setDescription('La materia en cuestión')
			.setRequired(true));

export const data = command;
export async function execute(interaction) {
	let materia = interaction.options.getString('materia');
	await interaction.reply(materia);
}

