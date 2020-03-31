
const Discord = require("discord.js");

const fs = require("fs");

const bot = new Discord.Client({ disableEveryone: true });

const token = "NjkyMjcyODY3ODE5MjU3OTM5.Xn73fQ.1gS1S2w5dAyEGzpW7Hgv9sPloZY";

const botconfig = require("./botconfig.json");

const Enmap = require("enmap");  

bot.commands = new Enmap();

bot.on("ready", () => {
  console.log("Dad Gen bot is now online");
  bot.user.setPresence({
    game: { name: `${bot.guilds.size} SERVERS | ${bot.users.size} MEMBERS`, type: "WATCHING" }
  });
});

const snekfetch = require("snekfetch");
bot.on('message', message => {
if (message.content === 'fuck') {
message.channel.send(`No you`, {
    embed: {
      image: {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8CFiUh77J-IxD9GcoPS3oWGeXp3wZ38AfH8t79th4q29sXyOB"
      } 
    }
  });
}});

//Start fun commands


bot.on('message', message => {
	if (message.content === 'Hey') {
message.channel.send(`Hello`)
}});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});
// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Apple)
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    // without going into too many details, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    // This line is awesome by the way. Just sayin'.
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  }); 
});// This loop reads the /events/ folder and attaches each 
bot.login(token);
//the thing that login the bot donotremove


//brb 10 min k dm me if you want to talk
