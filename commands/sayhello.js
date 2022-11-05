const { SlashCommandBuilder } = require('discord.js');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('sayhello')
                .setDescription('Replies with hello'),
        async execute(interaction) {
                await interaction.reply('HELLO');
        },
};
