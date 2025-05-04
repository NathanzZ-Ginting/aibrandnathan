module.exports = {
    data: {
      name: 'portfolio',
      description: 'Link to my portfolio',
    },
    async execute(interaction) {
      await interaction.reply('Check out my portfolio here: [Portfolio Link](https://myportfolio.com)');
    },
  };