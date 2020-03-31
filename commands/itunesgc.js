const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=itunesgc'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated an Itunes Gift Card Code and sent to DMs!"
}});
  
   
      
    var string = `
1UW2YACN317YY449
QE601B85YJLZTF97
L6FXL7C7PGB83K3N
7E6PT28XYDUNML06
XOLR2FQ4QQZPTVRW
R00SYAGVY3I7CWYK
JI616ZYI6QNWPLO0
U7EL74P9FKE8GR6F
UM39TCTZ3CW0KQTW
GASS9MAXA7GLEF98
WE2GTKMDZH6XRX45
2OPP3WZC5YIOBU01
ZFGGFPVM5408MHD2
CMHXPWQ5UDXTK7SW
WFERX0JLJ6EC9UIB
84FNEQD6WBJ8ZGZH
2OWENSD3S1Y9VXJ1
WXDZDVO2JU9VJIEK
92WVY2R3YAUP5CMG
MZDLIC3VGUNKLPHH
CECAG4FV7343CQV4
5TML8SSCJJ5WBSQQ
G7MYHPRJV2ZO8XJN
CD8LIFRC12WORZLD
J3H70YZJ73T4D3MQ
98205TSUTM8GL4BZ
HNHGHTEGZYHNJ7MU
B27AUV8MY1NWNZ8M
LKYZ4U47TP5HU98R
9X5FSVT32CU5YM9Z
I96XH9DIK7SAOTIW
Z3WGTW74MHZAL3E7
UFQVA6IH5N81GCGZ
PB23GORR4192GPOD
6FAX6Y8Y5A5R3GCA
YPVORUKB1PW9KLZ2
EXIN36HWVWVBOB86
ZGCK12K952H9OM0Z
0VBB5YXW71ZAQ7BZ
B23ZBOZX5SOP8ETC
UN6WAZGC0V19FT4W
7HKE7UO6VU07HLTA
DRPSW5DBQG5XAEOI
DR6QC5R39AKR727J
HY2M46PB6MOHML3H
B505GCYL5I0US9CX
M3WP79M2IAZN1941
TGTQLNUMWH1C5BTW
LN3URU1TE1B7VTZE
Q3QP5Y09CH8F5HHZ
EFE7B4KIU7WF64RH
97GMEXGDI0DG5OL0
0WLP3I8LEDFP5KSD
2NSSLXN2J320C81E
LURYEJY7COIN9BAP
40RR0ELHN87GMQ3R
P9P8H1RP4U1HBVK2
0FKX0XFJGIGBICRJ
48F4RZYVOXO6BBM1
T6AEUPNSUNIG0XYE
C8R84DBRS0MCTXEB
LX2S0IXGPJUPE2RB
CZAQ3O1SD6FSI4GA
P0X3HSOA9YFEZTXM
BSAXDARD5483RJFO
XKWCJEXLRN3AA65K
E03J134IDRV701BJ
NOOVVM8J1CU942GM
BYIR4WW2FTDSE9AN
ARP341Q4H66T1NYL
HPPUCNWNJGTVB02L
YVDACQC9G2KHZW8D
DCX1YBNRV0TNR3FU
VGTXH0BZGBNDU7IT
O23A7O9TQSV4I3ZA
OC4Q7Q3A8N59NIFK
SR8FW6MCX6A3X5G1
5JHJXDC8BH6PSUKW
NS2GH1ADCWFVI4FH
Z7EZGLJYWY2HNHMC
JFOLA2OH7EOUX9EO
L4EBPBAGQWTWVG58
QOUATEMFT54CW9WH
U8EC2CW4ILCB70K4
AFX0S2TYNITJSHV6
EYHN4DMSGD5KMIMH
T82NE25ZN8HNQ0JI
WH12E1HE4NRFBSBM
Z9O2M290NX59747Y
J6PWDIWGXIX8WLYW
8O2TKQD0XX4WOEVB
327Q5ER98UH7M9AK
62FH544H2IC3Q4ML
O4QDK5SWEGBL7Z39
GBHMAMSVAAXE8K80
T8A85GQZVWN74UAG
85KWCLQEOMBUBVOY
E6UFLH4NFLAESAIT
YIG9SIZ1GY32H2WX
S82MEL2TDT63B3BV`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}