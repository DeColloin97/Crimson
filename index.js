const botSettings = require("./botsettings");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("discord | -help", {type: "WATCHING"});
});

bot.login("NDY5MzA0ODc3NzcyNzAxNjk3.DjKYZA.Y9qtEx9wspqsuwCaoj1ueGF2mOk");
