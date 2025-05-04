module.exports = {
    data: {
      name: 'help',
      description: 'List of available commands',
    },
    async execute(interaction) {
      await interaction.reply('Here are the available commands:\n\n' +
        '/aboutme - Get information about me\n' +
        '/portfolio - Link to my portfolio\n' +
        '/cv - Link to my CV\n' +
        '/socials - My social media links\n' +
        '/ping - Check if the bot is online\n' +
        '/help - List all commands\n' +
        '/greet - Greet new members\n' +
        '/jadwal - Show my schedule');
    },
  };