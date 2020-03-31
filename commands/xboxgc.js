const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=xboxgc'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a Xbox Gift Card Code and sent to DMs!"
}});
  
    
      
    var string = `
Y3N14-ZPB70-BKBZR-G6UZ0-WBKIX
MKSLU-AVPGP-B4SDO-0ATX9-P7QV1
DMZAU-EFML7-5X30F-6846U-Y3LZA
PDX3L-2N9WY-9KIPT-GX2TX-TPJAY
OMI3Q-IF92G-0E5T0-KQ3RL-Y2R2W
49T1Q-LWRPU-ZT3Q6-626G3-E9AT8
75X2Y-HVILT-DRW72-SBQUN-PAXB2
JMF9I-6A14F-K8NR1-KCFIS-XBH8U
KJOQI-S5O82-NNZCL-0IJE2-NKGEF
VFF6V-O2ES3-EKMQN-UMMHO-AMPB6
DQBP2-OXT8D-V1YYI-5JN4M-XC3LF
Z8EQB-VN2DM-HIA37-HTO2W-UBPQW
97TO2-VTBP0-6DZYT-GW51G-DB30P
HF0VO-U83LM-GMGXS-4KZZO-BFKM5
BT1AR-DF4NQ-Q5IY8-KT2RV-CT29H
V4POW-EAHPZ-G0V0B-WS7PU-T36IF
9TZPP-KX0PI-OXQ6B-CMDER-H9MPJ
KS13I-QF1MB-KXYU7-CPLB9-LMBBW
Z4CM5-QZEPW-8AB9O-31DL2-HVT3G
24ZYM-2W5WB-OQLRZ-M6U0U-GCT2I
6W3X4-EF3XC-TAPV2-LXTR0-DAD5Z
Q76FK-IHGRY-4QSC2-96QUT-ZNRJW
W1FTI-X81KH-QHR19-WQ228-LH4RL
HG0XN-NL4A9-WFJWU-JW8K8-Y3K0W
0YATD-Q5GD8-WWPKR-QY5G8-S7OVQ
JUTT1-GPKR0-HJBQ3-NE9DK-ASXU7
ARKQJ-F4ARD-KH9U0-FA39Q-658K0
SBUZL-D0S8G-NFZ0I-LBBLG-F92DX
LKIOI-W0RAZ-VIKIK-ELMPE-0BAPR
90GYH-DMQON-0WM0X-K9HBJ-MMPFD
ZBR3K-H91WC-E9AWC-9I8HH-RYHR4
2DALC-WAFO3-SBB21-3G59L-J27BA
WDAOE-QZNQV-YUA6Y-FGXK8-CE88G
IR7D8-VIX81-XPWKV-LVDWT-XVHZH
6ISYH-CU4RV-2FCAS-IKQA2-IIBPU
822QF-TO5DN-4VRHV-0Y2Y8-ZIPBM
ZHGTG-EWKWD-GG429-S6P6E-9HQVD
7EMPT-XJGCO-R3KYJ-JODSE-RJFSR
VGBMR-XNX00-OMG2F-9RFMB-BDDLV
TZY4P-VGY8W-HYBDY-XMMU0-08SPQ
JX2JI-705JK-6ZQL2-EP4GM-0Q6DD
65GW3-8T066-E4W8D-3E14D-XPU9K
OJ0S4-CJDVG-SVOY7-HFNOX-TTHA5
ROWX4-9WYZO-B5JPX-WVA5F-D42YQ
ECPGG-KN2ST-WIL2H-B7U7O-K70FI
QVJYC-BGSEC-H69F6-9PFVU-NVJJ0
JOGT5-B7CR7-LVA5C-I12SS-9LMMR
XQXVX-7M174-7C1YC-XDVGD-AO1WS
Y2EGY-TNUER-GT51E-Y8YR8-LM4HH
JZ0BP-94WBL-JG13F-O3KCK-JUQAH
Q9Z8A-K9MN8-ANELO-8M3QN-KETSX
LQC21-RJJCW-JOL91-7IN4S-BDBP1
8SUJP-BTB34-KVB3D-Y9HPK-CXQNL
2K511-GIXJC-XFO7C-8T7XV-ZUMCY
46D6M-58N7R-3L6O1-7RRKA-34OH2
BPM9W-405R1-E47LR-QN0D8-6GCL5
26EJO-LZ7H1-1LBY9-89927-RAYIB
UF8RG-A80MR-6AIQ8-WNHCP-WSPJL
VSQF5-X0NJT-S37D9-KE4DU-ZXQ9V
4XP4S-D8JDF-JDAAW-G33FB-9UBKT
NLGM9-FA3RK-GSGZI-NJNT2-6IXHD
HRCD1-X1GYT-WBG5N-3Y36E-4N8AX
CDZ79-U24SR-W0LAJ-P7H6B-MFZR4
GQ8SP-K865M-2EH71-V6L5E-91N06
ZYNT8-GSGOK-9AZYA-PMC80-5JPFS
D5ZM6-A14GU-KI9ZK-985KB-ZB11Z
F2USX-HJ6VA-FX7Z2-I0UPB-P1FEE
ZWTAI-KLHMP-UR3FM-I3VCH-AZVHN
Z5CQY-6OAXD-473E9-YGK42-Y9JMK
SFQ70-ROEVZ-YOWFU-KHJ5O-F37Q8
R7PT7-OMJV9-ELPDL-UTXUV-S5GBR
F4YVE-HRPVC-H9UY8-3MGC5-TSF0S
CAY6Z-ME9JI-KZ30H-3YE4F-SYB5A
82EM8-RIE5I-OPV2Y-DH3J2-TL0C4
L43IE-5HN1M-3OZY2-20PL3-RU2V1
5R9LY-VF7C8-0LABX-FBUGT-4HDCD
VG0DH-WYTIF-TWWPV-JBKM2-C1KXB
LRFXW-N2IWJ-XZ6KE-NSLU4-ABHNI
HHCUU-VIAFQ-OFUBF-GX6T1-LHB0L
VY3LH-40GIF-IGEOU-07RFL-AFE95
6Z4J3-1MCUX-SYQKB-OCUDB-JV6MQ
ZLUUC-GIP56-XF74X-AHOKZ-TC85L
74QN4-4DMT8-7GT1E-EC682-61H45
LKAQT-1MO4K-O573S-4CCNN-WQY2H
BFFLG-K7X7K-FM7T7-6EAYX-H0R6J
TXYV0-3IIUP-P0A0R-L83Q7-KU5CJ
1GUUY-VF2OS-N7YEI-SCK92-LFYFW
05HGC-726A6-IU479-A5S0C-LWUCJ
SLMPC-E5D8W-6530S-ABI03-4B3Y7
MTUAC-5K7DV-UNOQL-VUY89-HLN2M
TROH5-B0VX5-5MJWS-KR34T-Z3XUJ
QMYEF-FY5G1-VCGUK-0U61A-WRS4H
F1CBB-Y5N3O-5MYLA-WVM1A-RCZVZ
XHYET-HCKD9-EQB4M-V8S75-0DQRT
LWYRM-C61ZB-6GIV5-V9AWN-GPUV1
F8VBY-BQ39A-23EC6-AIOYI-9WLQ2
GA4DB-S9HYP-TGLQ2-JFDFC-J3O6H
HQ5S7-VN9D8-S7UVB-5K52D-YHQ4W
OLBUB-EGSU0-B9TUU-H3HKO-QIGEO
IL2NR-90WHO-AKJJ4-TW725-J8UEM`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}