const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বে্ঁশি্ঁ 𝐁𝐨𝐭 𝐁𝐨𝐭 ক্ঁর্ঁলে্ঁ তো্ঁকে কি্ঁক্ঁ মে্ঁরে্ঁ 𝐋𝐞𝐚𝐯𝐞 নি্ঁবো্ঁ কি্ঁন্তু্ঁ 😒😒 " , "শু্ঁন্ঁমু্ঁ না্ঁ তু্ঁমি্ঁ আ্ঁমা্ঁর্ঁ 𝐍𝐚𝐳𝐫𝐮𝐥 ব্ঁস্ঁ রে্ঁ প্রে্ঁম্ঁ ক্ঁরা্ঁই্ঁ দে্ঁও্ঁ না্ঁই্ঁ" , "আ্ঁমি্ঁ আবাল দে্ঁর্ঁ সা্ঁথে্ঁ ক্ঁথা্ঁ ব্ঁলি্ঁ না্ঁ, 𝐎𝐊 😒" , "এ্ঁতো্ঁ ডে্ঁকো্ঁ না্ঁ গো্ঁ, প্রে্ঁমে্ঁ প্ঁরে্ঁ যা্ঁবো্ঁ তো্ঁ 🤭" , "𝐇𝐮𝐦 𝐉𝐚𝐧, তু্ঁমি্ঁ কি্ঁ আ্ঁমা্ঁকে্ঁ ভা্ঁলো্ঁবা্ঁসো্ঁ..? 🤔💋 " , "এ্ঁত্ঁ ডা্ঁকি্ঁস্ঁ কে্ঁন্ঁ মা্ঁথা্ঁ গ্ঁর্ঁম্ঁ হ্ঁয়ে্ঁ যা্ঁয়্ঁ 😤", "জি্ঁ ম্যা্ঁডা্ঁমঁ ব্ঁলে্ঁন্ঁ 😒, আ্ঁপ্ঁনা্ঁর্ঁ জ্ঁন্য্ঁ কি্ঁ ক্ঁর্ঁতে্ঁ পা্ঁরি্ঁ..!! 😑" , "- এ্ঁতো্ঁ ডা্ঁক্ঁছি্ঁস্ঁ কে্ঁন্ঁ রে্ঁ ? গা্ঁলি্ঁ শু্ঁন্ঁবি্ঁ না্ঁকি্ঁ..? 🤬" , "𝐈 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 𝐉𝐚𝐧𝐮 🥰" , "আ্ঁমা্ঁকে্ঁ না্ঁ ডে্ঁকে্ঁ সি্ঁংগে্ঁল্ঁ 𝐍𝐚𝐳𝐫𝐮𝐥 রে্ঁ এ্ঁক্ঁটা্ঁ  𝐆𝐅 দে্ঁও্ঁ...?😞 " , "- আ্ঁমি্ঁ 𝐁𝐨𝐭 ব্ঁলে্ঁ আ্ঁমা্ঁরে্ঁ অ্ঁস্ঁম্মা্ঁন্ঁ ক্ঁরি্ঁস্ঁ, 😰" , "𝐇𝐨𝐩𝐞 𝐁𝐞𝐝𝐚😾,𝐁𝐨𝐬𝐬 ব্ঁল্ঁ 𝐁𝐨𝐬𝐬😼" , "চু্ঁপ্ঁ থা্ঁক্ঁ ,না্ঁই্ঁ তো্ঁ তো্ঁর্ঁ দা্ঁত্ঁ ভে্ঁগে্ঁ দি্ঁবো্ঁ কি্ঁন্তু্ঁ 😒" , "𝐁𝐨𝐭 না্ঁ , জা্ঁনু্ঁ ব্ঁল্ঁ জা্ঁনু্ঁ 😘 " , "বা্ঁর্ঁ বা্ঁর্ঁ 𝐃𝐢𝐬𝐭𝐮𝐫𝐛 ক্ঁর্ঁছি্ঁস্ঁ কে্নো্ঁ 😾, দে্ঁখো্ঁস্ঁ না্ঁ 𝐆𝐅 খু্ঁজ্ঁতে্ঁ ব্যা্ঁস্ত্ঁ আ্ঁছি্ঁ 🐥" , "বোকাচোদা বার বার ডাকিস কেন কি বলবি বল 🤬" , "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘 " , "আমারে এতো ডাকিস না, আমি এখন মজা করার 𝐌𝐨𝐨𝐝 এ নাই 😒" , "হ্যাঁ জানু , এইদিক এ আসো এইদিকে কিস দেই 😘" , "দূরে যাইয়া মুরি খাঁ, তোর কোনো কাজ কাম নাই, শুধু 𝐁𝐨𝐭 𝐁𝐨𝐭 করিস  😒" , "বলদা তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কেনো শুনবো..?? 🤔 " , "আমাকে ডেকো না 😮‍💨,আমি বউ খুজতে ব্যাস্ত আছি 😶‍🌫️" , "কিরে কি হলো , কিছু মিস্টেক করচ্ছিস নাকি 😁" , "বলো কি বলবা, চিপায় যাইয়া বলবা নাকি সবার সামনে বলবা ?🤭🤏" , "তুই কালকে দেখা করিস তো একটু 😈" , "হ্যা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "হুম জান বলো  😎" , "𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌" , "আই লাভ ইউ.!!! আমার সোনা,ময়না,টিয়া 😍" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি 😒"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "🐣") || (event.body.toLowerCase() == "🐥")) {
     return api.sendMessage("-  𝐔𝐟𝐟'𝐬 𝐀𝐦𝐚𝐫 𝐁𝐚𝐛𝐮 𝐓𝐚𝐡 🐥","- ইসস আমার সোনা বাবু টা 🙊", threadID);
   };

    if ((event.body.toLowerCase() == "Nazrul Vai") || (event.body.toLowerCase() == "Vai")) {
     return api.sendMessage("𝐇𝐮𝐦 𝐁𝐨𝐥𝐞𝐧 𝐒𝐮𝐧𝐜𝐢 🐥💫", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `\n𝐍𝐚𝐦𝐞           : ➤ 〚 ${name} 〛                                                         \n𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱    : ➤ 【 ${global.config.PREFIX} 】                                                        \n╰💌➤ 🗣️ ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
