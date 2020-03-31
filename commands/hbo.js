const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=hbo'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a HBO/HBO NOW Account and sent to DMs!"
}});
  
      
    var string = `claudiacos20@hotmail.com:rosario77
ceschab@gmail.com:bigsky66
suppanaz@gmail.com:Ykopx6214
tylerleehester@gmail.com:Morrison6
contact@tunahead.com:d1rago6n
nemoaesthetic@yahoo.com:Redemption13
jeremy@jeremyberger.com:grendel1
jqmartin13@gmail.com:Cronus69
tanner.bratcher@gmail.com:dude5343
vinumeister@gmail.com:Redeag1e
justin@stubbs.net:champion11
BeamesderferAndrew@gmail.com:Need2929
brian138x@yahoo.com:rockstar00
gauzfaux@gmail.com:intrepid2FOUR5
Thomasgheem@gmail.com:Masterful1
tussalframe@gmail.com:Giovanni14
payton.lloyd@icloud.com:Pinkpandas11
tmyers.myers4@gmail.com:Mybmw2014
spann.ashley@yahoo.com:Baytown281
schorette@gmail.com:rayne456
davis20tjc@yahoo.com:troup123
rojelioreyes@gmail.com:hershey02`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}