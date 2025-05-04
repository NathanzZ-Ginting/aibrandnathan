module.exports = {
    data: {
      name: 'aboutme',
      description: 'Get info about me',
    },
    async execute(interaction) {
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
    },
  };