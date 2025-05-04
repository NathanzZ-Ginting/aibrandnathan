module.exports = {
    data: {
      name: 'mentor',
      description: 'Introduction about me as a mentor',
    },
    async execute(interaction) {
      await interaction.reply(
        `Hi! I'm Joenathan Ginting — a passionate mentor in software engineering, mobile & web development.\n\n` +
        `I’ve mentored over 10,000 learners in Flutter, web, and software development through workshops, webinars, and coding platforms.\n\n` +
        `Feel free to ask questions or join my next mentoring session! 🚀`
      );
    },
  };