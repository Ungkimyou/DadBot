const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[0]) return message.reply("What you want me to embed?")

        let usermsg = args.slice(0).join(" ");

        let saymsg = new Discord.RichEmbed()
        .setColor("#A973F9")
        //.setThumbnail(message.author.avatarURL)
        .addField("Anonymous wanted to say", usermsg);

        message.delete().catch();
        message.channel.send(saymsg);
    }

module.exports.help = {
    name: "say"
}