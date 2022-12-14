const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Add filter word')
        .addStringOption(option =>
            option.setName('word')
                .setDescription('Filter word')
                .setRequired(true)),
    async execute(interaction) {
        const { guildId } = interaction;

        const word = interaction.options.getString('word')

        interaction.client.dictionary[guildId] || (interaction.client.dictionary[guildId] = [])
        if (interaction.client.dictionary[guildId].some(item => item === word)) await interaction.reply(word + ' already in filter list');
        else {
            interaction.client.dictionary[guildId].push(word)
            await interaction.reply(word + ' was added to filter list');
        }

    },
};