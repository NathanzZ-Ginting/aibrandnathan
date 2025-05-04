const { Client, GatewayIntentBits, SlashCommandBuilder, Routes } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const { REST } = require('@discordjs/rest');
global.ReadableStream = require('stream/web').ReadableStream;

// Client setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} is online!`);
});

// Slash command registration
const commands = [
  new SlashCommandBuilder().setName('aboutme').setDescription('Get info about me'),
  new SlashCommandBuilder().setName('portfolio').setDescription('Link to my portfolio'),
  new SlashCommandBuilder().setName('cv').setDescription('Link to my CV'),
  new SlashCommandBuilder().setName('socials').setDescription('Link to my social media'),
  new SlashCommandBuilder().setName('ping').setDescription('Check if the bot is online'),
  new SlashCommandBuilder().setName('help').setDescription('List of available commands'),
  new SlashCommandBuilder().setName('mentor').setDescription('Link to my mentor'),
  new SlashCommandBuilder().setName('jadwal').setDescription('Show my schedule'),
].map(command => command.toJSON());

// Register slash commands
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

// Command handling
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'aboutme') {
    await interaction.reply({
      content: 'I am Joenathan Haganta Ginting, a Fullstack and Mobile Developer!',
      embeds: [{
        color: 0x0099ff,
        title: 'About Me',
        description: 'Learn more about me on my portfolio!',
        fields: [
          { name: 'LinkedIn', value: '[My LinkedIn](https://linkedin.com/in/joenathanginting)' },
          { name: 'Instagram', value: '[My Instagram](https://instagram.com/nama_kamu)' },
        ],
      }],
    });
  } else if (commandName === 'portfolio') {
    await interaction.reply('Check out my portfolio here: [Portfolio Link](https://myportfolio.com)');
  } else if (commandName === 'cv') {
    await interaction.reply('Download my CV here: [CV Link](https://drive.google.com/file/d/abc123)');
  } else if (commandName === 'socials') {
    await interaction.reply('Follow me on social media: [Instagram](https://instagram.com/nama_kamu), [LinkedIn](https://linkedin.com/in/joenathanginting)');
  } else if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'help') {
    await interaction.reply('Available commands:\n/aboutme\n/portfolio\n/cv\n/socials\n/ping\n/help\n/greet\n/jadwal');
  } else if (commandName === 'mentor') {
    await interaction.reply('Consult me as a mentor!');
  } else if (commandName === 'jadwal') {
    await interaction.reply('My schedule: [link to my schedule]');
  }
});

// Login bot
require("./keep-alive");
client.login(token);