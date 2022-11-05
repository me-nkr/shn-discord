const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add filter word'),
	async execute(interaction) {
        const { guildId } = interaction;

        const list = interaction.client.dictionary[guildId]

		await interaction.reply(list ? list.join(', ') : 'No filter words');
	},
};