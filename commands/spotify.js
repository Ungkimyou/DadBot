const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=spotify'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a Spotify Premium account and sent to DMs!"
}});
  
   
      
    var string = `
Live	c.moll1@web.de:Fendt926 , @PremiumHost Telegram | Country: DE, Plan: Spotify Premium Family	Plan: Premium-Family Owner | Expire: 4/8/20 | Country: DE | Username: c.moll1@web.de
Live	danyellylimah@hotmail.com:Danielly1 , @PremiumHost Telegram | Country: BR, Plan: Spotify Premium Family	Plan: Premium-Family Owner | Expire: 4/7/20 | Country: BR | Username: danyellylimah@hotmail.com
Live	sassyaunt1@verizon.net:Lhstr8as , @PremiumHost Telegram | Country: US, Plan: Spotify Premium Family	Plan: Premium-Family Member | Country: US | Username: sassyaunt1@verizon.net
Live	jessica.boenisch@t-online.de:j13091993 , @PremiumHost Telegram | Country: DE, Plan: Spotify Premium	Plan: Premium-Family Owner | Expire: 4/12/20 | Country: DE | Username: jessica.boenisch@t-online.de
Live	fslienhard@hotmail.com:Clover78 , @PremiumHost Telegram | Country: CH, Plan: Spotify Premium Family	Plan: Premium-Family Member | Country: CH | Username: fslienhard@hotmail.com
Live	schwaablilli@web.de:lillisch1 , @PremiumHost Telegram | Country: DE, Plan: Spotify Premium Family	Plan: Premium-Family Member | Country: DE | Username: schwaablilli@web.de
Live	tonyl1979@gmail.com:Kris0228 , @PremiumHost Telegram | Country: US, Plan: Spotify Premium Family	Plan: Premium-Family Member | Country: US | Username: tonyl1979@gmail.com
Live	ellen.fellmann@web.de:Frontiera1 , @PremiumHost Telegram | Country: DE, Plan: Spotify Premium	Plan: Premium-Family Owner | Expire: 4/4/20 | Country: DE | Username: ellen.fellmann@web.de
`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};

module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}