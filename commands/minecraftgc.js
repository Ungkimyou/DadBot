const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=minecraftgc'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a Minecraft Gift Card Code and sent to DMs!"
}});
  
     
      
    var string = `
382O-9KYV-RVXL
3I1N-OS8W-50RW
RO2S-5AX5-CC6O
HSDE-52D1-M0U7
70ZP-NEES-K3LR
E44O-FTLE-9890
F1J4-J6A8-K3K0
7U7G-8YNC-AZQV
7OZ2-K7PV-B0BW
M46J-721I-UGKA
6FZS-RDN7-Q5L1
B9SS-QTWC-05WT
EWBQ-G8H5-HZH5
Z469-ZM8J-LURJ
ZP7S-RS88-Y3LZ
U27C-HZTJ-PHZR
6R9U-YGXJ-4G94
T42X-E6OF-AQ5Q
387G-UH4N-J485
IZ3P-962P-TRZU
VXYC-DWPU-MNMG
O4PB-2QKG-H3U6
B02L-VGOC-0RAM
3O4A-UY5B-VLGN
VN5N-VTKF-PUJM
MRHQ-K4DS-IER3
EJUG-E9EB-YE81
J20L-FJBA-D50P
TBVJ-JHWK-ZI4Q
SFO2-VLEV-HA3Q
820G-504K-QUKX
ALDM-GPS0-ZPEY
DMQ6-7UVF-SODQ
8Z9I-GTPY-ORYF
UUEF-VUGI-864T
BR92-SEYZ-IC4M
13AE-GUGJ-9W9H
IZZO-D3SG-FB0V
MKFY-I4EJ-EVSX
3BUZ-QTKI-E3VR
O64O-R9WA-16JT
WIG7-MFY5-R170
CMIH-J86U-F99J
80ZN-ADMT-1M3Q
TYWF-MHJI-YPJA
27J3-WZYP-9Q7Z
6SYK-DTS3-2PMU
59HN-7BT0-GQXL
Z7GC-R2ZJ-JY12
NILU-N300-4BB0
XBP4-WQ7U-I4MA
ANCB-9X3Q-HD8X
MO1Z-1UUW-0UY1
8DPY-KZB9-4JVB
3CD3-CGJS-YWZA
WC2A-RVYH-F6Y3
HHRD-U4QP-615F
04GI-CELM-VBR5
GZW6-1RB5-1X7N
926T-YBN7-VJLC
WVBV-6O5A-II1N
1X9E-VIDK-F13V
8QA3-EPQJ-DX4Y
DTAN-GEAT-F13H
TZRR-2IIA-B9Z1
758Z-R650-N30Q
PJ3U-FH9V-BES6
IZF2-0BW8-X9GR
3L24-IP6Z-SIY4
T5GQ-Y7ZH-T4OG
993Y-M6O3-5O9T
INHV-XRQ0-UZ6N
KRMC-P4QW-IL53
EFYS-YX5H-RPRQ
N0UJ-6GJU-E9GM
9CH9-0LUQ-JZA0
R2A2-GFIA-77PU
W1HF-WGQ4-BFE7
EGZ2-50UR-XUFH
RQXV-COYI-4H45
86M2-MTJY-KZWJ
Z7K8-H7K0-M7QT
17AU-2SOQ-3N9Z
K0AG-IT3N-SUTW
3P1T-2FHL-GXXS
59XE-EXNB-IH8O
HZ0H-K779-5OIL
HGBA-WJT8-RZWJ
EY53-2C91-RZVL
DMP5-0KJX-ZATV
POF7-CWA8-MS2B
HMTY-XXRC-C4YI
1BHK-PP9Y-MNFA
PXXM-UMIR-H09R
G1IG-78G0-VFWW
EACW-VBNZ-ITN5
4FEY-JE9S-4JTB
EWIA-E7R7-71ZT
0Q9D-7PK3-7K7U
7X0R-A79X-31PX`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}