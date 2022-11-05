const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute (message) {
        const { guildId } = message;

        if (message.client.user.id !== message.author.id)
        if ( message.client.dictionary[guildId] && message.client.dictionary[guildId].some(word => new RegExp(word, 'g').test(message.content) ) ) message.delete()
    }
}