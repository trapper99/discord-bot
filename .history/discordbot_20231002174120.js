require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Discord.js', { type: 'WATCHING' });
});

client.on('messageCreate', (msg) => {
  if (msg.content === 'Hello') {
    msg.reply(`Hello ${msg.author.username}`);
  }
});

client.login(process.env.CLIENT_TOKEN);
client.login(process.env.CLIENT_TOKEN);