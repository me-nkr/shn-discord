const { Collection } = require('discord.js');

module.exports = class Init {

    constructor(client) {
        this.client = client;
    }

    commands(commands) {

        this.client.commands = new Collection();

        for (let [commandName, command] of Object.entries(commands)) {
            this.client.commands.set(command.data.name, command);
        }

        return this;
    }


    events(events) {

        for (let [eventName, event] of Object.entries(events)) {
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(...args));
            } else {
                this.client.on(event.name, (...args) => event.execute(...args));
            }
        }

        return this;
    }
}