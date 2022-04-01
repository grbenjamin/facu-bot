import { readdirSync } from 'node:fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import cfg from '../config.json' assert { type: 'json' };

const commands = [];
// Agarramos todos los comandos de igual manera que lo hacemos en el index.js
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	// Guardamos en la lista que queremos usar el json de cada comando
	const command = await import(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(cfg.token);

rest.put(Routes.applicationGuildCommands(cfg.clientId, cfg.guildId), { body: commands })
	.then(() => console.log('Se crearon los comandos con exito'))
	.catch(console.error);
