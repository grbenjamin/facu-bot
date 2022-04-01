import { readdirSync } from 'node:fs';
// Traer las clases de discord.js
import { Client, Collection, Intents } from 'discord.js';
import { token } from '../config.json';

// Crear la instancia
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection(); // Guardamos una collecion de todos los comandos

// Buscamos en todos los archivos de la carpeta commands y agarramos solo los que terminen en .js
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Agregame un item en la coleccion, con el nombre del comando
	// como key y el comando en si como value
	client.commands.set(command.data.name, command);
}

// Cuando el cliente este ready, dar un mensajito:
client.once('ready', () => {
	console.log('Ready!');
});

// Manejar eventos. En este caso, cada vez que se interactua con el bot.
// Habra que fijarse si la interaccion fue un comando u otra cosa,
// y si lo es, ejecutarlo.
client.on('interactionCreate', async interaction => {
	// Si lo que se hizo no fue llamar un comando, retornar
	if (!interaction.isCommand()) return;

	// Cual es el comando?
	const command = client.commands.get(interaction.commandName);

	if (!command) return; // Verificar que se creo

	// Tratar de ejecutar el comando, y sino, loguear el error
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Hubo un error al ejecutar el comando', ephemeral: true });
	}
});

// Login a discord con el token
client.login(token);
