require('dotenv').config();

import { Client, Intents } from 'discord.js';
const client = new Client(// Import the necessary modules and functions for testing
const { Client } = require('discord.js');
const { messageCreate } = require('./your-code-file'); // Replace 'your-code-file' with the actual file name

// Mock the necessary objects and functions
const message = {
  content: 'ping',
  reply: jest.fn(),
};

// Write the unit tests
describe('messageCreate event', () => {
  test('should reply with "pong" when the message content is "ping"', () => {
    // Mock the client
    const client = new Client();
    client.user = { tag: 'TestUser' };

    // Call the event handler
    messageCreate(client, message);

    // Check if the reply function was called with the correct argument
    expect(message.reply).toHaveBeenCalledWith('pong');
  });

  test('should not reply when the message content is not "ping"', () => {
    // Mock the client
    const client = new Client();

    // Call the event handler
    messageCreate(client, { content: 'hello', reply: jest.fn() });

    // Check if the reply function was not called
    expect(message.reply).not.toHaveBeenCalled();
  });
}););

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