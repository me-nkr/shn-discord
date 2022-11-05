const { REST, Routes } = require('discord.js');

module.exports = async (commands) => {

const commandsArray = [];

for (let [commandName, command] of Object.entries(commands)) {
	commandsArray.push(command.data);
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

	try {
		console.log(`Started refreshing ${commandsArray.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: commandsArray },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
}
