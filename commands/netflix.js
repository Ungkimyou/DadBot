const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=netflix'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a Netflix Premium account and sent to DMs!"
}});
  
  
      
    var string = `favian92672@yahoo.com:rodriguez123321 | Plan = Basic | Country = US | DVD = false | Trial = true | Screens = 1 | Quality = None | Next Billing = 4/24/20
fms@dr.com:malik840 | Plan = Premium | Country = PK | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing  = 25 April 2020
a0988067151@gmail.com:r3136608 | Plan = u9AD8u7D1A | Country = TW | DVD = false | Trial = false | Screens = 4 | Quality = UHD |
chino4808.val@icloud.com:Rapchino99@ | Plan = Premium | Country = US | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing = 3/30/20
lozbx@yahoo.com:Kayleen167 | Plan = Premium | Country = US | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing = 4/20/20
toad375@yahoo.com:bullfrog | Plan = Standard | Country = US | DVD = false | Trial = false | Screens = 2 | Quality = HD | |Next Billing  = April 1, 2020
marypamplin38@yahoo.com:Lovemykids2 | Plan = Premium | Country = US | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing = 4/19/20
llamasfrancisco90@gmail.com:chavo101 | Plan = Premium | Country = US | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing = 4/18/20
jainujjwal@yahoo.com:printmaker | Plan = Mobile | Country = IN | DVD = false | Trial = false | Screens = 1 | Quality = None | Next Billing = 25/04/20
shouvikdas@gmail.com:rourkela12 | Plan = Premium | Country = IN | DVD = false | Trial = false | Screens = 4 | Quality = UHD | Next Billing = 27/04/20
jomarilixmac@gmail.com:Potato09 | Plan = Basic | Country = US | DVD = false | Trial = false | Screens = 1 | Quality = None | Next Billing = 4/13/20
linkx519@gmail.com:Zeldafan2001 | Plan = Standard | Country = US | DVD = false | Trial = false | Screens = 2 | Quality = HD | Next Billing = 4/26/20
dgeorga@gmail.com:dg1234 | Plan = Standard | Country = GR | DVD = false | Trial = false | Screens = 2 | Quality = HD | |Next Billing  = April 27, 2020
pavinesh.singh@gmail.com:Dragonoid1 | Plan = Standard | Country = US | DVD = false | Trial = true | Screens = 2 | Quality = HD | Next Billing = 4/24/20
slk1213@hotmail.com:Tweenies1 | Plan = Standard | Country = US | DVD = false | Trial = false | Screens = 2 | Quality = HD | |Next Billing  = April 28, 2020
lluce87@gmail.com:adrienne1 | Plan = Standard | Country = US | DVD = false | Trial = true | Screens = 2 | Quality = HD | Next Billing = 4/28/20
maustin0714@hotmail.com:Andrew0730 | Plan = Basic | Country = US | DVD = false | Trial = false | Screens = 1 | Quality = None | |Next Billing  = April 26, 2020
jward@dysart.org:panors69 | Plan = Basic | Country = US | DVD = false | Trial = false | Screens = 1 | Quality = None | Next Billing = 4/25/20
anweshas900@gmail.com:anusen20 | Plan = Standard | Country = US | DVD = false | Trial = false | Screens = 2 | Quality = HD | |Next Billing  = April 27, 2020
sldicostanzo@yahoo.com:sld12510 | Plan = Standard | Country = US | DVD = false | Trial = false | Screens = 2 | Quality = HD | |Next Billing  = April 10, 2020
Cdesanti9723@gmail.com:Carlos9723 | Plan = Basic | Country = US | DVD = false | Trial = true | Screens = 1 | Quality = None | Next Billing = 4/28/20`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}