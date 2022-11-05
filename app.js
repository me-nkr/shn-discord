const { Client, GatewayIntentBits } = require('discord.js');
const { init } = require('./utils');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

new init(client)
.events( require('./events') )
.commands( require('./commands') )

client.login(process.env.TOKEN);