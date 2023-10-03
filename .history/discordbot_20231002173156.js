require('dotenv').config();

import { Client, Intents } from 'discord.js';
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Discord.js', { type: 'WATCHING' });
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login(process.env.CLIENT_TOKEN);