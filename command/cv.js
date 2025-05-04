module.exports = {
    data: {
      name: 'cv',
      description: 'Link to my CV',
    },
    async execute(interaction) {
      await interaction.reply('Download my CV here: [CV Link](https://drive.google.com/file/d/abc123/view)');
    },
  };