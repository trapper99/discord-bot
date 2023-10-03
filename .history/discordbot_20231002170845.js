require('dotenv').config();

const { Client, Intent} = require('discord.js');
const client = new Client({ intents: [Intent.FLAGS.GUILDS, Intent.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Discord.js', { type: 'WATCHING' });
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

