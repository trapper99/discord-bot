const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
    async execute(interaction) {
        await interaction.reply(`This server is ${inter}`)
    }    
}