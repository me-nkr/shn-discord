const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute (message) {
        if ( /spam/.test(message.content) ) message.delete()
    }
}