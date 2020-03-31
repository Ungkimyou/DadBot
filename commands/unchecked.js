const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=unchecked'){
message.channel.send({embed: {
  color: 3447003,
  description: "Unchecked means that the accounts or gift cards are unchecked, which means it hasn't been run through software that validates codes."
}});
    
 
};
};

module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}