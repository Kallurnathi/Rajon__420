/** don't Change /? Nazrul code it, but you after editing it, we should respect each other a little ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nazrul",
  description: "prefix video",
  commandCategory: "command sign event video send",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             "╭──────────────────╮                  🌸 𝐍𝐚𝐳𝐫𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱  🌸   ╰──────────────────╯                            𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫       : ➤  𝐍𝐀𝐙𝐑𝐔𝐋                                                          𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱        : ➤  /                                                         ╰𝐄𝐯𝐞𝐧𝐭➤ 🗣️ 𝗯𝗲𝗹𝗶𝘃𝗲 𝗧𝗵𝗮𝘁 🐣 একাকীত্ব কখনো বিশ্বাস ঘাতকতা করে না 😌✨      ╰─────────────────➤",
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/g0dpYGm.mp4",
"https://drive.google.com/uc?id=1my0Qs9K60k3V0pb3AVZ1P-IE9Nhx4NOm",
"https://drive.google.com/uc?id=1mvRxV8PgSg4ja10BVPpGx7dU-cYc3vB",
"https://drive.google.com/uc?id=1mzkKdGjYXd3xFTQmLK7_Q87bf9Lu4235",
"https://drive.google.com/uc?id=1msyXgtT8SlcGHwjAm3cQlKiAssEO-AgI",
"https://drive.google.com/uc?id=1my6LKsQYTpYlpV48NI8_CJAxdhIkB612",
"https://drive.google.com/uc?id=1mwVWobITdE3n3bvAIsEA6Av4m7FI2RXI",
"https://drive.google.com/uc?id=1njNi0cZihkVPnaUN-IMNy_Bqp0LGGJr3",
    "https://drive.google.com/uc?id=1ndfpIGqFVlhJaOt0YLb5aD477Ao8RTPO",
    "https://drive.google.com/uc?id=1o7gw3LC9SClHAQEYjcIQzuTo4HuMzhVU",
    "https://drive.google.com/uc?id=1novub6pctKDRQzNrONlKO12E4kJi0_SK",
    "https://drive.google.com/uc?id=1oLYie5Q9dACgh1I0dZYASETTPHzGmkDe",
    "https://drive.google.com/uc?id=1oQIaAteLYBKNYTMTzgizcQ0j0V2IW6dn",
    "https://drive.google.com/uc?id=1oEIijjagXPuseOUhowVEKYFY4b-cIEe5",
    "https://drive.google.com/uc?id=1nZgPPiyWaR8VNDFNAoTOICEe-Au-UjlT",
    "https://drive.google.com/uc?id=1oIC8hQVSwcqL469uaitN_s1XP4fsJI5-",
    "https://drive.google.com/uc?id=1nnCXYpIgK-GGX3EelI8nWfgrr5pcc2TN",
    "https://drive.google.com/uc?id=1n_ApTsr14g2iKosx36xFCZvdKcxba4HA",
    "https://drive.google.com/uc?id=1oLYhGejAHabjtPk3RiHN3oe8gr1dS84l",
    "https://drive.google.com/uc?id=1nHpcqR4jrSr3z_TcDWQzXbOYAdLg681V",
    "https://drive.google.com/uc?id=1oAG6FjJaFH9PRLWutkglKV3btu7HSKlI",
    "https://drive.google.com/uc?id=1n_k_7gQ3PK1BsbZxcoQjidZNQ0ZYI85U",
    "https://drive.google.com/uc?id=1o-ZYsCbRI87pp1G1jbyKGmH8C8LO22te",
    "https://drive.google.com/uc?id=1oF6a8ind780UoiHL1GM5EsObiEhne987",
    "https://drive.google.com/uc?id=1nU6dbb_P-zt8ZLZQllGba_m3j297NS5P",
    "https://drive.google.com/uc?id=1nm-q11JeWBgFZ-12HpgGtxbdlc7709rT",
    "https://drive.google.com/uc?id=1ngb_I7yE_TrR4sp45ECQO1bqMTga681V",
    "https://drive.google.com/uc?id=1o6rGQK704pgdxW2J9MCIooaKAtJy8qXF",

];
   var callback = () => api.sendMessage({body:`『 ${know} 』 \n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚d 𝐍𝐚𝐳𝐫𝐮𝐥 ...🤍`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };