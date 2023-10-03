require('dotenv').config();

const { Client, Intent} = require('discord.js');
const client = new Client({ intents: [Intent.FLAGS.GUILDS, Intent.FLAGS.GUILD_MESSAGES] });

