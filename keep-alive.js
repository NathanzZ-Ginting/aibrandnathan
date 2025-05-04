const express = require("express");
const config = require("./config.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Bot is alive!");
});

app.listen(config.port, () => {
  console.log(`Keep-alive server running on port ${config.port}`);
});