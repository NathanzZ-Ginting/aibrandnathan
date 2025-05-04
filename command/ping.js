module.exports = {
    data: {
      name: 'ping',
      description: 'Check if the bot is online',
    },
    async execute(interaction) {
      await interaction.reply('Pong!');
    },
  };