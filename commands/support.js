const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=support'){
message.channel.send({embed: {
  color: 3447003,
  description: "Check DMs for support server invite link!"
}});
      
    var string = `https://discord.gg/cK2bYbM`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};

module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}