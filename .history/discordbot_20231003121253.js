require('dotenv').config();

const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();

const commandPath = path.join(__dirname, '')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Discord.js', { type: 'WATCHING' });
});

client.login(process.env.CLIENT_TOKEN);

client.on('messageCreate', msg => {
  if (msg.content === "Hello") {
    msg.reply("Hello ${msg.author.username}");
  }
});
