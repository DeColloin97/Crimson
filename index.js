const botSettings = require("./botsettings");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("discord | -help", {type: "WATCHING"});
});