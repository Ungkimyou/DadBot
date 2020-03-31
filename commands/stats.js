const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
if (!message.guild) return;
if (message.content === '=stats'){
  message.channel.send({embed: {
  color: 3447003,
    description: `**D-GEN Stats:**\nServers: ${bot.guilds.size}\nOnline members: ${bot.users.size}\n Uptime: ${uptime} \n\n**Server Stats:**\nMember count: ${message.guild.memberCount}`
    
    
}});
  
}
}
