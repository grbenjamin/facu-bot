import { SlashCommandBuilder } from '@discordjs/builders';

const command = new SlashCommandBuilder()
	.setName('facubot')
	.setDescription('Brinda información sobre el bot');

export const data = command;
export async function execute(interaction) {
	await interaction.reply('test');
}
