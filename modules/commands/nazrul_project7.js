  module.exports.config = {
  name: "nazrulproject7",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul project",
  usePrefix: true,
  description: "send best Video",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("😓")==0 || (event.body.indexOf("😭")==0) || event.body.indexOf("☹️")==0 ||
event.body.indexOf("😔")==0 ||
event.body.indexOf("😅")==0 ||
event.body.indexOf("😞")==0 ||
event.body.indexOf("😅")==0 ||
event.body.indexOf("🥺")==0 || event.body.indexOf("😿")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("😭")==0 ||
event.body.indexOf("😥")==0 ||
event.body.indexOf("🥹")==0 ||
event.body.indexOf("😭")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/CGhm3PB.mp4",
"https://i.imgur.com/gGIwdJn.mp4",
"https://i.imgur.com/BTO8QNM.mp4",
"https://i.imgur.com/Jo8TJKm.mp4",
"https://i.imgur.com/m4twxVT.mp4",
"https://i.imgur.com/0tSctp8.mp4",     "https://i.imgur.com/PqtAjdx.mp4",
"https://i.imgur.com/KOsddPj.mp4",
"https://i.imgur.com/DmAZc1u.mp4",
"https://i.imgur.com/O7HIh6l.mp4",
"https://i.imgur.com/4tsxCHo.mp4",
"https://i.imgur.com/M1rGOGi.mp4",
        ];
     var callback = () => api.sendMessage({body:`⊹⊱︵✰⚡[ 𝑷𝒓𝒆𝒇𝒊𝒙 𝑬𝒗𝒆𝒏𝒕 ]⚡✰︵⊰⊹                                     ⊰᯽⊱┈──╌❊💫❊╌──┈⊰᯽⊱\n                                                              \n                               \n _>“___জীবন নিয়ে কতো কাহিনী,, অথচ নিশ্বাস বন্ধ হলে জীবনের গল্প শেষ ..!🌸♡\n\n 💁😘🪽\n\⊰᯽⊱┈──╌❊[ 💕 ]❊╌──┈⊰᯽⊱\n︵❣💫[  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐍𝐚𝐳𝐫𝐮𝐥   ]💫❣︵\n[ 𝐍𝐨𝐰 ]  :  ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n\n[ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "//2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const res = await
axios.get(`${global.config.video_api}`);
var shaon = res.data.data;
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}

  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🖤"] == "🖤" || data["🖤"] == true) data["🖤"] = false;
  else data["🖤"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🖤"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
