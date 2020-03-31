const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
// Add the code under   
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "D-GEN Commands:",
    description: `**General:**\n**=invite** Sends invite link to DMs.\n**=support **Sends support server invite link to DMs.\n **=stats** Shows both the bot stats and server stats.\n**=say** Bot repeats what you say.\n**=hidden** Bot repeats what you say but without credit.\n\n**Gift Cards:**\n**=steamgc** Generates Unchecked Steam Gift Card.\n**=netflixgc** Generates Unchecked Netflix Gift Card.\n**=itunesgc** Generates Unchecked Itunes Gift Card.\n**=psngc** Generates Unchecked PSN Gift Card.\n**=amazongc** Generates Unchecked Amazon Gift Card.\n**=fortnitegc** Generates Unchecked Fortnite Gift Card.\n**=minecraftgc** Generates Unchecked Minecraft Gift Card.\n**=xboxgc** Generates Unchecked Xbox Gift Card.\n**=nitro** Generates Unchecked Nitro code.\n\n**Premium Accounts:**\n**=spotify** Generates Spotify Premium Account.\n**=hulu** Generates Hulu Premium Account.\n**=origin** Generates Origin Account.\n**=minecraft** Generates Minecraft Account.\n**=nordvpn** Generates NordVPN Account.\n**=netflix** Generates Netflix Premium Account.\n**=hbo** Generates HBO/HBO NOW Account.\n**=disney** Generates Disney Plus Premium Account`,
  
  
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© D-GEN, by DAD#9292 and ٴ̔̏Mohammad#2547     "
    }
  }
});
}

module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}