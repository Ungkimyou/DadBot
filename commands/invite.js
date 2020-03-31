const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=invite'){
message.channel.send({embed: {
  color: 3447003,
  description: "Invite link send to DMs!"
  //message.<@635989280585678849>.send('Invite link sent')
}});
  let embed = new Discord.RichEmbed()
  embed.setTitle('Here is the invite link!')
  embed.setDescription(`[Click here](https://discordapp.com/oauth2/authorize?client_id=692272867819257939&scope=bot&permissions=8)`)
.setTimestamp()
    message.author.send(embed);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}