const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	// chage work to your command name
		.setName('work')
	// give your command description
		.setDescription('New command registered ?'),

		// write your logic in execute function
		/**
		 * @function execute
		 * @async should add async before execute to denote it is an asynchronous function
		 * @param {*} interaction 
		 */
	async execute(interaction) {
		await interaction.reply('Yes!');
	},
};