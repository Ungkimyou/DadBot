const Discord = require("discord.js");
const usedCommandRecently4 = new Set();

module.exports.run = async (bot, message, args) => {
// Add the code under   
if (!message.guild) return;
if (message.content === '=hulu'){
message.channel.send({embed: {
  color: 3447003,
  description: "Successfully generated a Hulu Premium account and sent to DMs!"
}});
  
  
      
    var string = `d_henry54@icloud.com:nike1010 | Name = Dre  | Country = US | Plan = No Commercials
santelli2001@yahoo.com:usmc3043 | Name = Anthony Moesenthin | Country = US | Plan = No Commercials
reschramek@aol.com:summit | Name = ronnie  | Country = US | Plan = Showtime - Live TV - HBO - Cinemax - Starz - Entertainment - Español Add-on
zhangstaev@gmail.com:t3hb4llz | Name = Evan Zhang | Country = US | Plan = No Commercials
josecastaneda1234@gmail.com:Paola2000 | Name = JOSE  | Country = US | Plan = No Commercials
ddisatu@aol.com:1watermelon | Name = Delores Vaughn | Country = US | Plan = Live TV
ecrowell9@gmail.com:emily121 | Name = Emily Crowell | Country = US | Plan = No Commercials
stephanievb1@yahoo.com:Burleson7 | Name = Stephanie  | Country = US | Plan = No Commercials - Cinemax
ed.eppinett@gmail.com:KKK4life | Name = Ed Eppinett | Country = US | Plan = No Commercials
terryterrell3238@yahoo.com:ohiostate32 | Name = terry terrell  | Country = US | Plan = Live TV
alexahobal@gmail.com:Papa6868 | Name = alexa hobal | Country = US | Plan = No Commercials
jaleesa962@gmail.com:ailayah1 | Name = Jaleesa  | Country = US | Plan = No Commercials
ericseyden@yahoo.com:acid420 | Name = Eric Seyden | Country = US | Plan = No Commercials
lmzamora18@gmail.com:zamora18 | Name = Luis  | Country = US | Plan = No Commercials
sarangwala786@gmail.com:rangwala | Name = Sarah Rangwala  | Country = US | Plan = HBO
dean0_wade@yahoo.com:United00 | Name = William Wade  | Country = US | Plan = No Commercials
brooke2allison@gmail.com:Ballison1 | Name = Brooke  | Country = US | Plan = "25" - "26"
sheltondominic@gmail.com:Shelton12 | Name = dominic  | Country = US | Plan = No Commercials
caregon23@gmail.com:camilo23 | Name = Rene Gonzalez  | Country = US | Plan = "25" - "26"
mikeb87@live.com:reltub69 | Name = Michael Butler  | Country = US | Plan = "25" - "26"
honkyshonky22@yahoo.com:fuzzywuzzy1 | Name = Steven Shonk | Country = US | Plan = No Commercials
ddevoe@sbcglobal.net:marc92 | Name = diane deVoe  | Country = US | Plan = No Commercials
crisdude6@gmail.com:NinjaMonkey360 | Name = Cris Rodriguez | Country = US | Plan = No Commercials
kelvinreid6917@gmail.com:anniyah3 | Name = kelvin reid | Country = US | Plan = Showtime - Live TV - HBO - Starz
petedixon1234@gmail.com:pizzahut12 | Name = Pete Dixon | Country = US | Plan = No Commercials
cupachup09@gmail.com:0529429fl | Name = Chad  | Country = US | Plan = No Commercials
stephanie.farmwald@gmail.com:stephi13 | Name = Stephanie Farmwald | Country = US | Plan = No Commercials
wyattebrown@gmail.com:iluvlucy2 | Name = Wyatt  | Country = US | Plan = "25" - "26"
cherturner@hotmail.com:teacher3 | Name = Billy Bales  | Country = US | Plan = Live TV
lucy.9742@hotmail.com:97429742 | Name = Mary Sommers  | Country = US | Plan = No Commercials
walczakjody@yahoo.com:kendra1203 | Name = jody walczak | Country = US | Plan = No Commercials
amber_stan@msn.com:bray1brea2tay3 | Name = amber  | Country = US | Plan = Live TV
temozarazua@yahoo.com:sanluis507 | Name = temo zarazua | Country = US | Plan = No Commercials
cenj76@yahoo.com:e4ynexsevolinec | Name = Ceneida Echevarria  | Country = US | Plan = "25" - "26"
tlfall@aol.com:boots2007 | Name = Terri McKee Fallecker | Country = US | Plan = Live TV
ltolden@yahoo.com:eagles08 | Name = Laterrius Olden | Country = US | Plan = Live TV - "25" - "26"
princ34life@gmail.com:cheese123 | Name = Amir Mahrabkhani  | Country = US | Plan = "25" - "26"
brentfinchum@wol.org:brentf2004 | Name = Brent  | Country = US | Plan = "25" - "26"
sareson91@gmail.com:lauren8769 | Name = Spencer  | Country = US | Plan = No Commercials
kayorie8@aol.com:toyota2015 | Name = Gayle Schwarz  | Country = US | Plan = No Commercials
tnape@hotmail.com:chicago23 | Name = Anthony  | Country = US | Plan = Live TV - Cinemax
sonny.malonzo@yahoo.com:mal1onzo1 | Name = Sonny Malozno  | Country = US | Plan = "25" - "26"
bananacandy0830@gmail.com:love5812 | Name = Candice Gregoire | Country = US | Plan = No Commercials
bengals_lawson@yahoo.com:Bengals32 | Name = Brandon  | Country = US | Plan = Live TV
ryannleonard@yahoo.com:Carter@86 | Name = Ryann Leonard  | Country = US | Plan = "25" - "26"
trystan33.82@gmail.com:Zimmer483 | Name = Trystan Granados | Country = US | Plan = "25" - "26"
shanwilliams7@gmail.com:renae1 | Name = Shante  | Country = US | Plan = "25" - "26"
shawdowling@yahoo.com:jaquay162 | Name = Renee Shaw-Dowling | Country = US | Plan = No Commercials - HBO - Starz
sschenker1011@gmail.com:chloe143 | Name = stephanie schenker | Country = US | Plan = "25" - "26"
wadrianw23@gmail.com:lucky219 | Name = Adrian Lopez | Country = US | Plan = No Commercials
alyse.russell07@gmail.com:soccer04 | Name = Alyse Russell | Country = US | Plan = No Commercials
tammywatts87@yahoo.com:Michelle87 | Name = Tammy Watts | Country = US | Plan = No Commercials
jateets@gmail.com:11allstar | Name = Justin  | Country = US | Plan = No Commercials
bwakennels@gmail.com:Slugga22 | Name = Markus Palmer  | Country = US | Plan = "25" - "26"
crystal.fernandez@live.com:yourname1 | Name = Crystal Fernandez | Country = US | Plan = No Commercials
pericola@earthlink.net:Samtcat1 | Name = Ray  | Country = US | Plan = "25" - "26"
janda5854@yahoo.com:czech12 | Name = Keith Janda | Country = US | Plan = No Commercials
cameron_nikki@yahoo.com:Zachary12 | Name = Nikki Nicole  | Country = US | Plan = No Commercials
christopherwarrenhanson@gmail.com:Slipknot1 | Name = C1HANSON  | Country = US | Plan = No Commercials
epopke1040@gmail.com:ufarocks9 | Name = Emily Popke | Country = US | Plan = No Commercials
hillc913@gmail.com:hillary9 | Name = hillary  | Country = US | Plan = "25" - "26"
jamal2k02@gmail.com:Peace1986 | Name = Rashaad Pressley | Country = US | Plan = No Commercials
modgy28@hotmail.com:bowling300 | Name = Phil Modzelewski | Country = US | Plan = No Commercials
ejaroszewicz@msn.com:baseball72 | Name = Edward  | Country = US | Plan = Live TV
chitwood0730@yahoo.com:Adam0730 | Name = Adam  | Country = US | Plan = Live TV
julesparzy85@gmail.com:sewing123 | Name = Julie  | Country = US | Plan = "25" - "26"
rodneyfowler@yahoo.com:Bigred7732 | Name = Rodney Fowler  | Country = US | Plan = No Commercials
jlopez42487@yahoo.com:Alexis2005 | Name = Jessica Lopez  | Country = US | Plan = No Commercials
dmoser13@hotmail.com:Judah1313 | Name = Dan  | Country = US | Plan = "25" - "26"
jmlds82@gmail.com:jmjjmas88 | Name = Martin  | Country = US | Plan = "25" - "26"
shanesebrady1@yahoo.com:ajaya1 | Name = Shanese  | Country = US | Plan = Starz
trinity.faye@yahoo.com:charley123 | Name = Trinity Edmondson | Country = US | Plan = No Commercials
kaikotnt@hotmail.com:1islander | Name = tracy sagale | Country = US | Plan = No Commercials - Live TV - HBO
mandy_guerra@yahoo.com:peanut2011 | Name = Amanda Guerra | Country = US | Plan = No Commercials
val-dds@hotmail.com:liam29 | Name = V D | Country = US | Plan = Starz
mommysboymatthew@gmail.com:mom2boys | Name = Penny Auclair | Country = US | Plan = "25" - "26"
susie0914@aol.com:jack1125 | Name = Susie Gordon | Country = US | Plan = No Commercials - Starz
drewwydler8691@gmail.com:Matrix24 | Name = Andrew Wydler | Country = US | Plan = Live TV - HBO - Cinemax - Starz
junkinsbeta@gmail.com:1044beta | Name = Hannah Junkins  | Country = US | Plan = "25" - "26"
andrewdnns@gmail.com:drew2902 | Name = Andrew  | Country = US | Plan = No Commercials
jharrington0099@gmail.com:Baker001 | Name = Justine Harrington  | Country = US | Plan = Live TV
jblack553@gmail.com:Famous12 | Name = Justin Black | Country = US | Plan = "25" - "26"
tyler_curl@yahoo.com:pilgrim1 | Name = Steven Curl | Country = US | Plan = No Commercials - Showtime - HBO - Starz
sandrew2310@yahoo.com:sanchez2310 | Name = Andrew  | Country = US | Plan = "25" - "26"
bethanniek@gmail.com:health411 | Name = beth kieber | Country = US | Plan = No Commercials
jessisegura@yahoo.com:martin07 | Name = Jessi Segura | Country = US | Plan = "25" - "26"
amandafaye5610@gmail.com:tinyrose1 | Name = Rizen  | Country = US | Plan = No Commercials - Showtime
jomadrid_72@yahoo.com:linelle19 | Name = Josefina Cano | Country = US | Plan = No Commercials
murthy300@att.net:bowling1 | Name = Kristian Murthy | Country = US | Plan = No Commercials
tssavage@gmail.com:Alaska12 | Name = Tim Savage | Country = US | Plan = No Commercials - Showtime - Live TV - HBO
romeinaday26@yahoo.com:firefly1 | Name = CHRISTINA BISHOP | Country = US | Plan = "25" - "26"
drlf@etcmail.com:winston2 | Name = Leo  | Country = US | Plan = No Commercials
jamie_starr02@yahoo.com:Kinlee08 | Name = Jamie  | Country = US | Plan = "25" - "26"
a_dot82@yahoo.com:jamere02 | Name = Autumn Waugh | Country = US | Plan = No Commercials - HBO
Phillippi.Travis@gmail.com:1229thor | Name = Travis Phillippi | Country = US | Plan = Live TV
chaddy_22@yahoo.com:Camden22 | Name = Charity Bird | Country = US | Plan = Showtime - Live TV - HBO - Starz - Español Add-on
trebeard@aol.com:Saniyah04 | Name = Tre Beard | Country = US | Plan = No Commercials - Starz
rmmm4@comcast.net:Reader12 | Name = Maureen Townsend | Country = US | Plan = No Commercials
amberpinkham@gmail.com:Kaytlin00 | Name = Amber Pinkham | Country = US | Plan = No Commercials - Live TV
proswank15@gmail.com:proswank15 | Name = Christopher  | Country = US | Plan = No Commercials
skrenner1@gmail.com:Lauren01 | Name = Steve  | Country = US | Plan = No Commercials - Live TV - Starz
bhowell1085@gmail.com:fuckyou06 | Name = Brandon  | Country = US | Plan = No Commercials
ciscodarell@yahoo.com:1975nova | Name = darell cisco | Country = US | Plan = No Commercials
write2caw@aol.com:willard12 | Name = Cortney wilfong  | Country = US | Plan = "25" - "26"
cbroyhi@gmail.com:bishop01 | Name = charity broyhill | Country = US | Plan = No Commercials - "25" - "26"
edgoodwin32@gmail.com:bradley420 | Name = Bradley  | Country = US | Plan = Live TV - Cinemax
dillyn.crisp@gmail.com:shitty11 | Name = Dill  | Country = US | Plan = No Commercials
amber_williams14@ymail.com:Sophia0316 | Name = Amber  | Country = US | Plan = No Commercials
achavis9515@gmail.com:tootsieroll08 | Name = Audrianna  | Country = US | Plan = Live TV
jonathan.galindo88@gmail.com:Football2007 | Name = Jon galindo  | Country = US | Plan = "25" - "26"
trimsandy@gmail.com:Tristen1 | Name = Sandy  | Country = US | Plan = No Commercials
jen2104@gmail.com:Kali1230 | Name = Jennifer Waluck | Country = US | Plan = No Commercials
bat823@msn.com:jentony69 | Name = Jen Battista | Country = US | Plan = "25" - "26"
johnclinger@yahoo.com:Kema9193 | Name = John  | Country = US | Plan = "25" - "26"
pajon117@gmail.com:murdered3 | Name = Patrick Riggs | Country = US | Plan = "25" - "26"
bridgettevidrine@yahoo.com:Single#1 | Name = Bridgette Vidrine | Country = US | Plan = No Commercials
ittenbach@twc.com:children2 | Name = Ittenbach  | Country = US | Plan = "25" - "26"
statik.knox022494@gmail.com:wolfpack31 | Name = Selby M Knox  | Country = US | Plan = No Commercials
amccloud351@gmail.com:gatry351 | Name = Andrew McCloud  | Country = US | Plan = No Commercials - Live TV - Entertainment
belue97@gmail.com:Emma1997 | Name = Caroline  | Country = US | Plan = No Commercials
jonnyboy0007@aim.com:juliena123 | Name = jonathan eccleston | Country = US | Plan = No Commercials
jwong65834@gmail.com:bowser13 | Name = Jason  | Country = US | Plan = No Commercials - "25" - "26"
allison.dobosiewicz@gmail.com:twins2 | Name = Allison Dobosiewicz | Country = US | Plan = Showtime
nennieb0923@gmail.com:codyman1 | Name = jennifer rhoades | Country = US | Plan = HBO - Starz
skpederson22@gmail.com:dina22 | Name = Sean Pederson  | Country = US | Plan = No Commercials
carebear213@yahoo.com:Justhere1 | Name = Carrie Lawrence | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Cinemax - Starz - Entertainment - Español Add-on - "25" - "26"
jkucera4@verizon.net:Evangelionunit2 | Name = Joseph Kucera | Country = US | Plan = No Commercials
dani.miracle@yahoo.com:simon7197 | Name = Dani M | Country = US | Plan = No Commercials
boudreauxindia@yahoo.com:snowball1 | Name = India Boudreaux | Country = US | Plan = Live TV
argelia.minier@yahoo.com:Dogsrule12 | Name = argi_  | Country = US | Plan = No Commercials
angelanielsen21497@yahoo.com:Isabella5 | Name = angela nielsen | Country = US | Plan = No Commercials - Live TV
missesgartrell@gmail.com:kjr812007 | Name = Beth Gartrell | Country = US | Plan = No Commercials
keaganfuller@yahoo.com:Nodomain1qw | Name = Keagan Fuller | Country = US | Plan = Live TV
cbc.2000@me.com:Caroline56 | Name = Caroline Cheney  | Country = US | Plan = No Commercials
tory13gaming@gmail.com:drago233 | Name = Tory  | Country = US | Plan = No Commercials - Cinemax
admellott11@gmail.com:Candycanes11 | Name = Avrie Mellott  | Country = US | Plan = No Commercials
juliakaybarnes21@gmail.com:jujubee123 | Name = Julia  | Country = US | Plan = No Commercials
melissiasmom@gmail.com:1Fatbaby | Name = Carolyn Goodspeed | Country = US | Plan = "25" - "26"
stephencarroll7707@gmail.com:Baseball2000 | Name = Steve Carroll  | Country = US | Plan = "25" - "26"
mikmatch@gmail.com:flowers1973 | Name = Michael Matchett | Country = US | Plan = "25" - "26"
jbaglivi10251@gmail.com:Cartman101 | Name = John Baglivi | Country = US | Plan = No Commercials
HarnerZachary@yahoo.com:07018603 | Name = Zachary Harner | Country = US | Plan = No Commercials
jareddunn84@gmail.com:pornstar69 | Name = Jared Dunn | Country = US | Plan = No Commercials
misschapin@gmail.com:bnc12703 | Name = Jenna Chapin | Country = US | Plan = No Commercials
leelyn12@gmail.com:spartan56 | Name = leelyn waggoner | Country = US | Plan = No Commercials
maxcadenasso@gmail.com:jones281 | Name = Max Cadenasso  | Country = US | Plan = No Commercials - Showtime - Starz
tech3241@gmail.com:FireTruck88 | Name = jboy arnie | Country = US | Plan = No Commercials
auntieh3@aol.com:belluz69 | Name = Brayden Welch | Country = US | Plan = No Commercials
ArkWolf413@gmail.com:joniel12 | Name = Rafael Zayas | Country = US | Plan = No Commercials
j.cole8328@gmail.com:micahdev18 | Name = Joshua Landrum | Country = US | Plan = No Commercials - Live TV - Starz
lindseygaustad@yahoo.com:softball8 | Name = Lindsey Gaustad  | Country = US | Plan = "25" - "26"
hydenwg@gmail.com:grossman | Name = Orbulas Harding | Country = US | Plan = No Commercials - Live TV - Cinemax - Starz
rmt603@hotmail.com:rachel98 | Name = Mindy Turchin | Country = US | Plan = Live TV
taaltrek@mac.com:romans829 | Name = Caleb Dean | Country = US | Plan = "25" - "26"
chrismarie1971@aol.com:pontiac77 | Name = Chris Huffman | Country = US | Plan = No Commercials
christian.kapustka@hotmail.com:rangers1994 | Name = Christian  | Country = US | Plan = No Commercials
ayerfayer16@gmail.com:kybaby1998 | Name = Felicia Ayer | Country = US | Plan = No Commercials
dbombell@mac.com:mouse096 | Name = Daniel Bombell | Country = US | Plan = No Commercials
treetnn@gmail.com:slimfbg1 | Name = brandon Keith | Country = US | Plan = No Commercials
steven.buc1@gmail.com:justin1999 | Name = Steven McShand | Country = US | Plan = No Commercials
shmarlojones828@gmail.com:History2001 | Name = Marlene  | Country = US | Plan = No Commercials
fja722@gmail.com:takeahike | Name = Frank Santangelo | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Cinemax - Starz
christopher.elliott@gmail.com:cooper99 | Name = Christopher  | Country = US | Plan = No Commercials
naeemmakhani@gmail.com:makhani1 | Name = Naeem Makhani | Country = US | Plan = No Commercials - Starz
juarez.jen@hotmail.com:juarez92 | Name = jennifer juarez | Country = US | Plan = No Commercials
justin_masse@hotmail.com:R1ckover | Name = Justin Smith | Country = US | Plan = No Commercials
nathanni1994@gmail.com:1994n531sH | Name = Siheng  | Country = US | Plan = No Commercials
hotzpocketz@gmail.com:03redwilly | Name = Corey Long | Country = US | Plan = No Commercials
moshern1@ferris.edu:Wrestle189 | Name = Nino  | Country = US | Plan = "25" - "26"
aetyler13@gmail.com:Allison18 | Name = Allison Tyler | Country = US | Plan = No Commercials
upton_chris@ymail.com:Qazxsw12 | Name = Chris Upton | Country = US | Plan = No Commercials
s_lockard@hotmail.com:Alicia20 | Name = Scott  | Country = US | Plan = No Commercials - HBO
ellie.noyes@comcast.net:ImSh3rl0ck3d | Name = Ellie  | Country = US | Plan = No Commercials
kittfc1@gmail.com:Screwface44 | Name = Kitt Flamer-Caldera  | Country = US | Plan = No Commercials - HBO
timotheus12345@gmail.com:Trobertson16 | Name = Timothe Robertson | Country = US | Plan = No Commercials
grandstaff.jacob@gmail.com:jamigr1234 | Name = Jacob Grandstaff | Country = US | Plan = No Commercials
jileoni29@gmail.com:Pemorio29 | Name = Juan  | Country = US | Plan = "25" - "26"
tmakian@gmail.com:Bababank12345 | Name = Ali  | Country = US | Plan = "25" - "26"
nstefani00@yahoo.com:avenger1 | Name = Neil Stefani | Country = US | Plan = No Commercials
roykax3@live.com:remmie123 | Name = Nicholas Ryan | Country = US | Plan = No Commercials
aprry2@gmail.com:975864246aA | Name = Aaron Parry  | Country = US | Plan = No Commercials
davidmpenn@hotmail.com:Instruct1 | Name = David Penn | Country = US | Plan = No Commercials
domdugas91@gmail.com:Judedugas1 | Name = Dominique Dugas | Country = US | Plan = No Commercials
mgillen@oswego.edu:Kyobouyo4 | Name = Meghan Gillen | Country = US | Plan = HBO
dalonso333@gmail.com:reyfuego1998 | Name = Diego Alonso | Country = US | Plan = No Commercials
lkoetje@eagles.ewu.edu:Fudavid1 | Name = Levi  | Country = US | Plan = Starz
coop4499@me.com:fatman98 | Name = Austin  | Country = US | Plan = No Commercials
ryanne.blumberg@gmail.com:ihateyou77 | Name = Ryanne Blumberg | Country = US | Plan = No Commercials
kekailoatory@gmail.com:kekailoa5 | Name = Tory Alao | Country = US | Plan = No Commercials
hannahduff22@gmail.com:Tigers22 | Name = Hannah Duff | Country = US | Plan = No Commercials
dadoj33@hotmail.com:jackie22 | Name = Dado Grozdanic | Country = US | Plan = No Commercials
juggalettebich@hotmail.com:nevaeh0803 | Name = Angela Ballew | Country = US | Plan = "25" - "26"
mahlet.nigussie2@gmail.com:m10161996 | Name = mahlet debela | Country = US | Plan = No Commercials
flowerg93@yahoo.com:college2011 | Name = Lela Harrison | Country = US | Plan = No Commercials
katerina_gregorakis@yahoo.com:katkat93 | Name = Katerina Gregorakis | Country = US | Plan = No Commercials
d.ochaya@yahoo.com:djo123 | Name = DJ  | Country = US | Plan = No Commercials
traclindquist@gmail.com:1Charger | Name = tracey lindquist | Country = US | Plan = No Commercials
bethanyhanes90@gmail.com:woolridge17 | Name = Kim Nguyen  | Country = US | Plan = No Commercials
tosha0310@yahoo.com:Jasper12 | Name = Tosha  | Country = US | Plan = "25" - "26"
jennaacooper@gmail.com:drstinky | Name = Jenna Cooper | Country = US | Plan = No Commercials - Showtime
trinity_stupey@yahoo.com:Monkey12 | Name = Trinity Stupey | Country = US | Plan = No Commercials - Showtime - HBO - Cinemax
michaelbarba26@yahoo.com:piazza31 | Name = Michael Barba  | Country = US | Plan = No Commercials
candyienyas@yahoo.com:jarikah12m | Name = Stephanie Morris | Country = US | Plan = No Commercials
abbigail.goodding@yahoo.com:agoodding1 | Name = Abbi Goodding  | Country = US | Plan = Live TV
lexiradjewski@yahoo.com:radj5076 | Name = lexi  | Country = US | Plan = No Commercials
jpatric2@ncsu.edu:Jayne1992 | Name = Jayne-Anne Patrick | Country = US | Plan = No Commercials
hehesmith@yahoo.com:CareBear97 | Name = Heather Smith | Country = US | Plan = No Commercials
mereus@hotmail.com:Terrell5 | Name = Rhonda Mereus | Country = US | Plan = No Commercials
jay_vasquez23@yahoo.com:Jayduckie23 | Name = Jay Vasquez | Country = US | Plan = No Commercials
jenviera25@gmail.com:crickette39 | Name = Jennifer Thomas | Country = US | Plan = No Commercials
lashun.robinson@gmail.com:xen5iho9 | Name = Quatana Robinson | Country = US | Plan = Showtime
bsdhayleys@gmail.com:izzy2013 | Name = Hayley Sederberg | Country = US | Plan = No Commercials
jimthecacti@gmail.com:11b433acd1 | Name = Jeff Jeffries | Country = US | Plan = No Commercials
jacobskayla2@gmail.com:goes4516 | Name = Kayla Jacobs | Country = US | Plan = No Commercials
sknowles217@yahoo.com:design217 | Name = sarahk  | Country = US | Plan = No Commercials
lepatton312@yahoo.com:9ot64LEP | Name = Laura Patton | Country = US | Plan = No Commercials
laura.foster12@yahoo.com:lailagirl6 | Name = Laura Foster  | Country = US | Plan = No Commercials
sheldonmichael2@gmail.com:Shel9924 | Name = Michael sheldon  | Country = US | Plan = "25" - "26"
marlenelambert1125@gmail.com:dahlia1125 | Name = marlene lambert | Country = US | Plan = No Commercials - Showtime
emca224@g.uky.edu:jaguars22 | Name = Emily  | Country = US | Plan = No Commercials
anely_aguilar@yahoo.com:turtles58 | Name = Anely Aguilar | Country = US | Plan = "25" - "26"
mullinbubba@optonline.net:carlie11 | Name = Erica Mullin  | Country = US | Plan = No Commercials
miriamgalantx@gmail.com:pcp909rt | Name = Miriam Galan  | Country = US | Plan = No Commercials
alexis1477horton@gmail.com:EXPRESS1477 | Name = alexis  | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Cinemax - Starz
cyn.chapel@yahoo.com:Cindynjoe1 | Name = Cynthia Chapel | Country = US | Plan = No Commercials - Showtime
tmterry@comcast.net:libbie00 | Name = Thomas Terry | Country = US | Plan = No Commercials
gregorycorona7712@gmail.com:Gregory77 | Name = Gregory Corona | Country = US | Plan = "25" - "26"
karenana440@yahoo.com:Cards1229 | Name = Ana Espinoza  | Country = US | Plan = No Commercials
carissa_leigh@icloud.com:January1987 | Name = Carissa  | Country = US | Plan = "25" - "26"
adananderika@gmail.com:Iwbiacm4 | Name = Erika Perez | Country = US | Plan = No Commercials
steven_lany19@rocketmail.com:steven13 | Name = Yamilette Laboy | Country = US | Plan = No Commercials
kassilsmith@hotmail.com:stars123 | Name = Kassi Smith | Country = US | Plan = No Commercials
derekneal88@gmail.com:Mert1956 | Name = Derek Neal | Country = US | Plan = No Commercials
judy.hoffman667@yahoo.com:Jonla126 | Name = Judy Hoffman | Country = US | Plan = Live TV - Starz
leslieg92@aol.com:chiquita23 | Name = leslie  | Country = US | Plan = No Commercials
merrickkwilliams@gmail.com:AMC90210 | Name = Merrick Williams | Country = US | Plan = No Commercials
tlh38721@gmail.com:Rollybar1 | Name = Toni Hall  | Country = US | Plan = No Commercials
kbrew2@unh.newhaven.edu:Kelkelx03 | Name = Kels Brewer | Country = US | Plan = Live TV - "25" - "26"
shybby1@yahoo.com:Button2015 | Name = Cheyanne Phillips | Country = US | Plan = No Commercials - Showtime
jaz1002@yahoo.com:jazzie12 | Name = MsJai Needum | Country = US | Plan = No Commercials
megdumke@gmail.com:Himmelstein1 | Name = Meg Dumke | Country = US | Plan = No Commercials
biddleashley@yahoo.com:runner710 | Name = Ashley Altman | Country = US | Plan = No Commercials
grine.3@gmail.com:redmen72 | Name = Alex Grine  | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Starz
mmotko54@live.com:Brewcrew00 | Name = Michael  | Country = US | Plan = Live TV
nyaisa45@gmail.com:lannette19 | Name = Nyaisa  | Country = US | Plan = Starz
melanie.bonney@yahoo.com:julian77 | Name = melanie bonney | Country = US | Plan = No Commercials
hannah.eginoire@yahoo.com:chetta02 | Name = Hannah Eginoire | Country = US | Plan = No Commercials
mcurry71814@gmail.com:rlc22015 | Name = Makayla Curry  | Country = US | Plan = "25" - "26"
seidlerysu22@yahoo.com:Penguins22 | Name = Aaron Seidler  | Country = US | Plan = Live TV
stephanielewis9@hotmail.com:gunny1107 | Name = Tyler Gunstream  | Country = US | Plan = No Commercials - Live TV
smoore542002@yahoo.com:suzeep54 | Name = Susie  | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Cinemax - Starz
bfoss21@icloud.com:Mahtomedi7 | Name = Bradley Foss  | Country = US | Plan = Live TV
skrowitz@gmail.com:crow2769 | Name = Sheila  | Country = US | Plan = No Commercials
emmaclaire4296@yahoo.com:Cupcakequeen123 | Name = Greg FitzGerald | Country = US | Plan = Live TV
smjacobs17@hotmail.com:soccer17 | Name = shanna jacobs | Country = US | Plan = Live TV
dey_sii@yahoo.com:rawr1986 | Name = Daisy Lucio | Country = US | Plan = No Commercials
gertrynee@gmail.com:mickey26 | Name = Gretchen Housel | Country = US | Plan = No Commercials
teelaree@hotmail.com:Budders128 | Name = Tera Johnson | Country = US | Plan = No Commercials
tonyshawnn@yahoo.com:brandy5109 | Name = tony ewell | Country = US | Plan = Live TV
jennifersmiddy@yahoo.com:Mybruiser1 | Name = Jennifer Loeb | Country = US | Plan = No Commercials
summerharlow06@gmail.com:Universal1 | Name = Summer Harlow | Country = US | Plan = No Commercials
kimhard@rocketmail.com:berly1965 | Name = kim hard  | Country = US | Plan = No Commercials
brandelyn420@gmail.com:Bran0420 | Name = Brandelyn  | Country = US | Plan = No Commercials
laurenneelysmith@hotmail.com:448984lns08 | Name = lauren smith  | Country = US | Plan = No Commercials
andrea.daisy.adl@gmail.com:daisy123 | Name = Andrea De leon | Country = US | Plan = No Commercials
hcarr@umich.edu:winston03 | Name = Holly Moore | Country = US | Plan = No Commercials
allie_crawford98@hotmail.com:justinbieber6 | Name = Allie Taylor | Country = US | Plan = No Commercials - Live TV
keeleycauthen@gmail.com:Cauthen12 | Name = Keeley Cauthen  | Country = US | Plan = "25" - "26"
charleywatts1007@gmail.com:Heinzmann1 | Name = Charley Watts | Country = US | Plan = No Commercials - HBO
mercado506@gmail.com:pedro506 | Name = pedro mercado | Country = US | Plan = "25" - "26"
meagenford@live.com:tfcu3404 | Name = Meagen Smith | Country = US | Plan = Live TV
sc.dugas@gmail.com:Matt8411 | Name = Sonya Dugas | Country = US | Plan = Live TV
vanessa_roberts15@eku.edu:snowball8 | Name = Vanessa Roberts  | Country = US | Plan = Live TV
rnye@zoominternet.net:jeep8017 | Name = renee nye | Country = US | Plan = No Commercials
gdunaway@carolina.rr.com:Pearson13 | Name = Gray Dunaway | Country = US | Plan = No Commercials
becci918@yahoo.com:magi2010 | Name = Rebecca Sutton | Country = US | Plan = "25" - "26"
rachel.moratti@yahoo.com:snowman3 | Name = Rachel Sullivan | Country = US | Plan = No Commercials
blairannika@gmail.com:annika00 | Name = Annika Blair | Country = US | Plan = No Commercials
basalduaalexandra@yahoo.com:Juliet07 | Name = Alexandra  | Country = US | Plan = No Commercials
fevent14@gmail.com:S684689e | Name = feven  | Country = US | Plan = No Commercials
lara.lane@cox.net:bubba1 | Name = Lara Lane | Country = US | Plan = No Commercials
ladyoc86@hotmail.com:Tia000413 | Name = Tia Latham | Country = US | Plan = No Commercials
vtabor61578@gmail.com:vtabor6551 | Name = Vanessa Tabor | Country = US | Plan = No Commercials
ibtegov@gmail.com:it013189 | Name = Iliana Tegov | Country = US | Plan = No Commercials - Live TV - HBO - Starz
atherton1919@gmail.com:22016Iron | Name = Emily Atherton | Country = US | Plan = No Commercials
rsmith1209@gmail.com:M0nopoly | Name = Rachel Nelson | Country = US | Plan = No Commercials - Showtime
lmariarod0122@gmail.com:lizr0522 | Name = Lizette Rodriguez | Country = US | Plan = Showtime - Live TV - Starz
kimberling.3@outlook.com:KAOluv13 | Name = Emma Kimberling | Country = US | Plan = No Commercials
l.nicholebradshaw@gmail.com:gurnica1 | Name = Lisa Bradshaw | Country = US | Plan = No Commercials
cara.annee@gmail.com:eva12345 | Name = Ben Green | Country = US | Plan = No Commercials
maral0923@yahoo.com:Athena23 | Name = Maral  | Country = US | Plan = No Commercials
joneskelsey30@yahoo.com:Softball14 | Name = Kelsey Jones | Country = US | Plan = No Commercials
abaker1231@gmail.com:bama1979 | Name = Ashley Baker | Country = US | Plan = Live TV
kyleighcox@outlook.com:Cuddles1 | Name = Kyleigh  | Country = US | Plan = No Commercials
sadiemac01@gmail.com:gymnastics1011 | Name = Mercedes  | Country = US | Plan = No Commercials - HBO
cieragilbert@gmail.com:queen1 | Name = Ciera Gilbert | Country = US | Plan = No Commercials
wagray_21@sbcglobal.net:KDLsnare13 | Name = Will Gray | Country = US | Plan = No Commercials - Cinemax
katy.rick15@gmail.com:tinker15 | Name = Katy  | Country = US | Plan = No Commercials - Live TV
tmmurray77@gmail.com:Michelle33 | Name = Trisha Jack | Country = US | Plan = Live TV
renea_444@yahoo.com:monkey444 | Name = Hannah  | Country = US | Plan = No Commercials
tidwelltracy@yahoo.com:jettellecole123 | Name = Tracy Grinnell Tidwell  | Country = US | Plan = Starz
dmburlison@yahoo.com:Rieger18 | Name = Rob Burlison | Country = US | Plan = No Commercials
cortneyjanaesmith@yahoo.com:Csmith17 | Name = Cortney Smith | Country = US | Plan = No Commercials
keya3787@icloud.com:Armani08 | Name = Shikeya Owens | Country = US | Plan = No Commercials
adachavez2@gmail.com:simao2007 | Name = adamaris chavez | Country = US | Plan = No Commercials - Showtime
darenk21@gmail.com:kasheemh10 | Name = Daren Kelley | Country = US | Plan = No Commercials
jzbagwell@gmail.com:magnum22 | Name = Jasmine Bagwell | Country = US | Plan = No Commercials
marjankhatibinoor@yahoo.com:dorsa2parsa | Name = Marjan Khatibinoor | Country = US | Plan = No Commercials - HBO
leesafoster@ymail.com:cadillac01 | Name = Leesa Foster | Country = US | Plan = No Commercials
jaiquieshasmith@yahoo.com:monea1 | Name = Jai Smith | Country = US | Plan = Live TV
harefdiaz123@gmail.com:HarefDiaz7 | Name = Haref  | Country = US | Plan = HBO - Cinemax - Starz
jc819003@wcupa.edu:Cun081894 | Name = Jamie Cunningham | Country = US | Plan = No Commercials
klancsxc04@yahoo.com:kristina11 | Name = Kristina Lanctot | Country = US | Plan = Live TV
ckhanbabaian1987@yahoo.com:Christin1 | Name = Christin Khanbabaian | Country = US | Plan = No Commercials
djs1girl02@comcast.net:hinote13 | Name = Erin Brietske | Country = US | Plan = No Commercials
haldrekah@yahoo.com:Darnyse8 | Name = Aldrekah  | Country = US | Plan = Live TV
lce5904@hotmail.com:Jackson22 | Name = Lindsey Edwards | Country = US | Plan = No Commercials
tifani_thomas@yahoo.com:firewater1 | Name = Tifani Thomas | Country = US | Plan = No Commercials
taylor_collier@yahoo.com:lynae07 | Name = taylor collier | Country = US | Plan = Live TV
brjhnizzo@gmail.com:bjai7519 | Name = Brian Izzo  | Country = US | Plan = No Commercials - Live TV
icebyissa@live.ca:alijah2007 | Name = Marissa Garcia | Country = US | Plan = No Commercials - Showtime
scarlettbabor@gmail.com:scarscar94 | Name = Scarlett Babor  | Country = US | Plan = No Commercials
esthermackert@gmail.com:Psycho19 | Name = Rosie  | Country = US | Plan = No Commercials - Starz
laurenariel67@gmail.com:Jerome1996 | Name = Lauren  | Country = US | Plan = No Commercials
kaylamatykunas@aol.com:kaykay127 | Name = Kay Maty | Country = US | Plan = No Commercials
pestes1977@gmail.com:Leandra8 | Name = Patty Blankenship | Country = US | Plan = No Commercials
mjbowman2007@hotmail.com:Bear2007 | Name = Melinda Bowman  | Country = US | Plan = Live TV
batesolet@gmail.com:adam6598 | Name = tasha batesole  | Country = US | Plan = No Commercials - Live TV
peachyg77@aol.com:Bryelle1 | Name = Stephanie  | Country = US | Plan = No Commercials
mariefowler88@gmail.com:sky18boy | Name = Antoinette  | Country = US | Plan = No Commercials
krystaldavid@hotmail.com:Reggie86 | Name = krystal skinner | Country = US | Plan = Live TV
stephgalton@yahoo.com:Sunshine6 | Name = Stephanie Galton | Country = US | Plan = "25" - "26"
clemayx3@aol.com:kc1407060 | Name = Cassandra Soto | Country = US | Plan = No Commercials - "25" - "26"
lauramartin110@yahoo.com:yodabug1758 | Name = Laura Martin | Country = US | Plan = No Commercials - Showtime - Live TV - HBO - Cinemax - Starz
cjay31094@aol.com:Cyril1994 | Name = Cjay Crawford  | Country = US | Plan = No Commercials
mollyeweaver1@yahoo.com:Cody55joe | Name = Molly  | Country = US | Plan = No Commercials
vcardenas13@yahoo.com:amc92666 | Name = Sullivan  | Country = US | Plan = No Commercials
alexakess1@yahoo.com:JKQdmpyz | Name = Alexa Kess | Country = US | Plan = No Commercials - Cinemax
harristerri9@gmail.com:stuntin97 | Name = terri  | Country = US | Plan = No Commercials
christayoung18@gmail.com:hemmo1996 | Name = tammy bentley | Country = US | Plan = Starz
marie_levitt@yahoo.com:3Reeskids | Name = Betty Levitt | Country = US | Plan = No Commercials
heather.owens2012@yahoo.com:20gaauto | Name = Heather Owens | Country = US | Plan = No Commercials
whitecap75@aol.com:Azure1908 | Name = Kristine Lycke | Country = US | Plan = Live TV
mlopez6902@icloud.com:tilltheend | Name = Maggie Lopez | Country = US | Plan = No Commercials
harrismason18@gmail.com:Harris16 | Name = Mason  | Country = US | Plan = No Commercials
christabelle.co@gmail.com:143billy | Name = Christabelle Jean | Country = US | Plan = No Commercials
efulbright81@gmail.com:audrey3 | Name = Emily Fulbright | Country = US | Plan = No Commercials
brit1081990@yahoo.com:Christian2015 | Name = Brittany Ballard | Country = US | Plan = Live TV
cortneyadlese@gmail.com:Cayden88 | Name = Cortney  | Country = US | Plan = Live TV
melanierayner@yahoo.com:nadim22q | Name = Melanie Kleinsorge | Country = US | Plan = No Commercials
acevedobrianna1@gmail.com:apollo25 | Name = Brianna  | Country = US | Plan = No Commercials - HBO
jleemccarn@gmail.com:leyton12 | Name = Jaclyn Lee | Country = US | Plan = No Commercials
katietay34@gmail.com:ilikeeggs | Name = summer  | Country = US | Plan = No Commercials
dlcompton@earthlink.net:anaco1 | Name = Dena Compton | Country = US | Plan = No Commercials
gabbylou66@gmail.com:Princess92 | Name = Gabby  | Country = US | Plan = "25" - "26"
eureka.wildcat.19@gmail.com:Riley0814 | Name = Kirsten Woodruff | Country = US | Plan = No Commercials
borerben21@yahoo.com:VladdieG1002 | Name = Benjamin Borer  | Country = US | Plan = "25" - "26"
knzheller@yahoo.com:Lilmack13 | Name = Mackenzie Heller | Country = US | Plan = No Commercials
abralsclassyandsassy@gmail.com:anglers888 | Name = Dal  | Country = US | Plan = "25" - "26"
jordane3733@gmail.com:jae1020 | Name = Jordan  | Country = US | Plan = No Commercials
alexgilbert2012@outlook.com:Loveyou12 | Name = Alex  | Country = US | Plan = No Commercials
brendi.lee@gmail.com:lovemybabies | Name = Brendi Blankenfeld | Country = US | Plan = Live TV
jessicae.lester@gmail.com:cooper44 | Name = jessica lester  | Country = US | Plan = No Commercials
immediate@gmail.com:savannah0 | Name = Rebecca  | Country = US | Plan = No Commercials
cindymarten@gmail.com:77Love77 | Name = Cindy Marten | Country = US | Plan = No Commercials
l.sarnie12@gmail.com:brooks101 | Name = Laura Sarnie | Country = US | Plan = No Commercials - Live TV
ashley.wilson2008@yahoo.com:Nov131989 | Name = Ashley wilson | Country = US | Plan = Live TV
hfisher85@gmail.com:blueeyes | Name = Hillary Fisher | Country = US | Plan = HBO
kmarsh21683@hotmail.com:kmarsh216 | Name = Kaitlin Marshall | Country = US | Plan = No Commercials
madelinefcarter@gmail.com:alamode | Name = Maddie  | Country = US | Plan = No Commercials
ap0ll0@mail.com:simple00 | Name = Pam Bowen | Country = US | Plan = No Commercials - Live TV
april5597@gmail.com:Iamsecond2 | Name = April Perez | Country = US | Plan = No Commercials
brandon.stricklen@gmail.com:Astros42 | Name = Brandon Stricklen  | Country = US | Plan = No Commercials
courtney@intefast.com:jilly1me | Name = Courtney Jackson | Country = US | Plan = No Commercials
cnmann95@gmail.com:Flowers123 | Name = Carolyn Mann | Country = US | Plan = No Commercials
txbarbi09@gmail.com:Jaxxie02 | Name = Barbara-Anne Russo | Country = US | Plan = No Commercials - HBO
mariamarzumanyan@gmail.com:mariam95 | Name = Mariam Arzumanyan | Country = US | Plan = No Commercials
brsternik@gmail.com:brirose342 | Name = Briana  | Country = US | Plan = No Commercials
melebaybee@yahoo.com:Happyy07 | Name = Mele Caseria | Country = US | Plan = No Commercials
shelley.caison@gmail.com:matthewryan2326 | Name = shelley caison | Country = US | Plan = No Commercials - Cinemax
sogar010@umn.edu:Few73Tul | Name = Oliver  | Country = US | Plan = No Commercials
m.stevens2263@gmail.com:maddy2263 | Name = Maddy  | Country = US | Plan = Showtime
eabernal04@gmail.com:eb128007 | Name = Erika Cintron  | Country = US | Plan = "25" - "26"
dutchess@knology.net:smile123 | Name = David Morrrow | Country = US | Plan = No Commercials
h.morton02@yahoo.com:pkhnhsy8 | Name = Kayli Arnold | Country = US | Plan = No Commercials
fwalton828800@gmail.com:Grant011 | Name = Felecia Walton | Country = US | Plan = No Commercials
mariahbabe19@yahoo.com:serena28 | Name = Dawn Mendoza | Country = US | Plan = No Commercials
cyndee1210@yahoo.com:believe1022 | Name = Cyndee Caulk | Country = US | Plan = No Commercials
jman2729@gmail.com:TIGGER08 | Name = Jordan  | Country = US | Plan = No Commercials
alireep@ymail.com:Asshole911 | Name = Aliree Paul | Country = US | Plan = No Commercials
misti718@gmail.com:lashon92 | Name = Misti Moon Moon | Country = US | Plan = "25" - "26"
babesandtots43@yahoo.com:Daycare1 | Name = Audra Thomas | Country = US | Plan = No Commercials
lindssbrianne.sarna@aol.com:lindsey | Name = Lindsey Sarna | Country = US | Plan = "25" - "26"
kdeal2121@live.com:deskjet2050 | Name = kristy deal | Country = US | Plan = No Commercials
real5ice@sbcglobal.net:Hoover2367 | Name = Anita Ice | Country = US | Plan = Live TV
tgrove03@leeu.edu:Cg423no1 | Name = Trista  | Country = US | Plan = No Commercials
kamlehraad@gmail.com:Alexandra1 | Name = Kamleh Raad | Country = US | Plan = No Commercials
rachaelhenry711@yahoo.com:Corbin12 | Name = Rachael Henry | Country = US | Plan = Live TV
alyssabaars@yahoo.com:doodlebug95 | Name = Alyssa Baars | Country = US | Plan = No Commercials - Showtime
dreshymia17@gmail.com:Andreas15 | Name = Crystal  | Country = US | Plan = "25" - "26"
bcwin2001@yahoo.com:Calvin10 | Name = Caroline Winters | Country = US | Plan = Live TV
ilovecats214@gmail.com:bigdicks111 | Name = Regan Laraia | Country = US | Plan = No Commercials
cale@dumbculture.com:boygenius | Name = Cale Peeples | Country = US | Plan = Live TV - HBO
mollyacronin@gmail.com:Moley2008 | Name = Molly Cronin | Country = US | Plan = No Commercials
daltonfarmer@ymail.com:wa2000 | Name = Dalton Farmer | Country = US | Plan = No Commercials
micheleswinarski@icloud.com:colton21 | Name = Gena  | Country = US | Plan = No Commercials
jessica-lee-20@hotmail.com:peaches25j | Name = jessica lee | Country = US | Plan = No Commercials
caroljsmith8@yahoo.com:2dogs2kids | Name = Carol Smith | Country = US | Plan = No Commercials - Live TV - Entertainment - "25" - "26"
summer_miller28@icloud.com:Summer96 | Name = Summer miller  | Country = US | Plan = No Commercials
erinnicolee62@gmail.com:68353june | Name = Erin  | Country = US | Plan = No Commercials
ccarr112003@yahoo.com:stankpop4 | Name = Chandra Carr | Country = US | Plan = No Commercials
23dizzle32@gmail.com:Dickies1 | Name = cameron karna | Country = US | Plan = Live TV - HBO
devin.landry@ymail.com:dl692826 | Name = Devin  | Country = US | Plan = Live TV
aniyah.lancaster@gmail.com:nazzie01 | Name = aniyah lancaster  | Country = US | Plan = No Commercials
lizfodo@aol.com:dogsrcool5 | Name = Liz  | Country = US | Plan = Live TV
alinacortega@gmail.com:sierra88 | Name = Alina Ortega-Bustamante | Country = US | Plan = No Commercials
cvbrantley@att.net:brantley1033 | Name = Vera brantley | Country = US | Plan = No Commercials
filomena73@live.com:diego323 | Name = Filomena Cechinel | Country = US | Plan = No Commercials
k.e.hatlestad@gmail.com:ripfred1 | Name = Katie  | Country = US | Plan = No Commercials
jessicamyrick54@gmail.com:Nanalovesme1 | Name = Jessica Myrick | Country = US | Plan = "25" - "26"
cjwalling@me.com:Cjsoccer13 | Name = Caylee Walling  | Country = US | Plan = HBO
twinlakerfans@aol.com:Brandon3 | Name = Jalynne crawford  | Country = US | Plan = Live TV - HBO - Cinemax
shanto_001@hotmail.com:shanto13 | Name = Shant Janbazian | Country = US | Plan = No Commercials
hunderegrace@yahoo.com:Allegra428 | Name = Grace  | Country = US | Plan = No Commercials - Showtime
brooke_shadrix@att.net:rshadrix4 | Name = Brooke Shadrix | Country = US | Plan = No Commercials
mc.lori.davis@gmail.com:Hartford2018 | Name = McKenzie  | Country = US | Plan = Live TV
alison.littell7@gmail.com:bigal636 | Name = Alison  | Country = US | Plan = No Commercials
bgawenit@yahoo.com:Casper13 | Name = becky  | Country = US | Plan = No Commercials - Showtime
ceogburn1@gmail.com:asd4rty | Name = claire ogburn | Country = US | Plan = No Commercials
warrior_volleyball2@yahoo.com:volleyball22 | Name = Kaylee Steffner | Country = US | Plan = No Commercials
labarbera.gg@gmail.com:prada18 | Name = Georgette Gonzalez | Country = US | Plan = No Commercials
saranicolemiller@rocketmail.com:Kaitlin1 | Name = Sara Miller | Country = US | Plan = No Commercials
lmmagdaleno@gmail.com:mags1193 | Name = Lisa Magdaleno | Country = US | Plan = No Commercials
kimmadison2u@gmail.com:taychr | Name = kimberly Madison | Country = US | Plan = No Commercials
ldeleon1181@gmail.com:marcella1 | Name = Lenore Deleon | Country = US | Plan = "25" - "26"
lewislaw88@gmail.com:luvmybabies5 | Name = Paris Lewis | Country = US | Plan = No Commercials
carlos4859.samsung@gmail.com:puppy123 | Name = Carlos4859  | Country = US | Plan = No Commercials
samduell@hotmail.com:rockon111 | Name = Sam Duell | Country = US | Plan = No Commercials
amkujawa@asu.edu:robin456 | Name = Alyssa Marie  | Country = US | Plan = HBO
mthompson3299@yahoo.com:Pooh1986 | Name = Monique T | Country = US | Plan = No Commercials
aubreymichelle09@gmail.com:Julybaby6 | Name = Aubrey Vanderstow | Country = US | Plan = "25" - "26"
bobbiebradley862@outlook.com:Dani1234 | Name = Clemtine Bradley | Country = US | Plan = No Commercials
kwpofmg@aol.com:monkey44 | Name = K Potvin | Country = US | Plan = No Commercials
karimcmurry@gmail.com:pickles | Name = kari  | Country = US | Plan = No Commercials
allegrawaymire@gmail.com:pendleton1714 | Name = Allegra Waymire | Country = US | Plan = No Commercials
keely.hoover@outlook.com:Sassy055 | Name = Keely  | Country = US | Plan = Live TV
colemankrystle801@gmail.com:ilikec00kies | Name = Krystle Coleman | Country = US | Plan = No Commercials
danisha.smith1991@gmail.com:marie009 | Name = Danisha Smith | Country = US | Plan = No Commercials
vkalro14@gmail.com:Anamsa108 | Name = Veda  | Country = US | Plan = "25" - "26"
milliemacc20@yahoo.com:Together99 | Name = Demille L Hudson  | Country = US | Plan = No Commercials
jalynn3434@gmail.com:single502 | Name = Jacquelyn McDonald | Country = US | Plan = No Commercials - Live TV
ehursey06@gmail.com:Iloveopie56 | Name = Erin  | Country = US | Plan = No Commercials
mday1214@hotmail.com:mday1230 | Name = Marie Day | Country = US | Plan = No Commercials
lmccolloch1980@gmail.com:jillian12 | Name = Lauren Mccolloch | Country = US | Plan = No Commercials
dmckenzie2012@gmail.com:Yungbat3 | Name = Devonte McKenzie | Country = US | Plan = "25" - "26"
emwillhite75@yahoo.com:tessa2005 | Name = ERin Willhite | Country = US | Plan = No Commercials
jessii27516@gmail.com:jess1002 | Name = Jessica Hernandez | Country = US | Plan = No Commercials
jadajosephine97@gmail.com:Marquel22 | Name = Jada  | Country = US | Plan = "25" - "26"
mweinstein1023@gmail.com:Bcs624180 | Name = Melissa  | Country = US | Plan = No Commercials
amandaneilson22@gmail.com:Smokeydexter1 | Name = Amanda Neilson  | Country = US | Plan = No Commercials
brittianylandrum@yahoo.com:Auggie15 | Name = Brittiany landrum  | Country = US | Plan = No Commercials
becckygirl94@aim.com:beccaboo7 | Name = Rebecca Hernandez | Country = US | Plan = No Commercials
pearlieaddleman07@gmail.com:Austin07 | Name = Pearlie Addleman | Country = US | Plan = No Commercials
chris2861@gmail.com:Hislove4me | Name = Chris sanders | Country = US | Plan = No Commercials - Cinemax
sabirahrayford@gmail.com:sL10048583 | Name = Sabirah  | Country = US | Plan = Live TV - Cinemax
timberose2@gmail.com:down2fenario | Name = Penelope Deem  | Country = US | Plan = No Commercials
sierrraaamann@hotmail.com:badsmell22 | Name = sierra manzanares  | Country = US | Plan = No Commercials
jaynethompson14@yahoo.com:Ranger14 | Name = Jayne Thompson | Country = US | Plan = "25" - "26"
sherriruble@gmail.com:MainE567 | Name = sherri gallow | Country = US | Plan = No Commercials`

    
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};


module.exports.help = {
//type the name of the command but you dont have too
  name: "sample"
}