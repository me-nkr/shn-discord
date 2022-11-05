const { Events } = require('discord.js');
const { deploy } = require('../utils');
const commands = require('../commands');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		await deploy(commands);
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};