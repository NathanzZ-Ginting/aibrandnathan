module.exports = {
    data: {
      name: 'socials',
      description: 'Link to my social media',
    },
    async execute(interaction) {
      await interaction.reply('Follow me on social media: \n[Instagram](https://instagram.com/nama_kamu)\n[LinkedIn](https://linkedin.com/in/joenathanginting)\n[Twitter](https://twitter.com/nama_kamu)');
    },
  };