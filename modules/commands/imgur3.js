module.exports.config = {
  name: "imgur3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "upload to imgur",
  commandCategory: "Game",
  usages: "[reply]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('╭•┄┅════❁𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽❁════┅┄•╮\n\n আসসালামু আলাইকুম-!!🖤💫\n আপনি যেই ছোবি টাকে Imgur link বানাতে চান সেই ছবি টায় imgur লিখে রিপ্লাই করুন \n\n╰•┄┅════❁「 𝐍𝐀𝐙𝐑𝐔𝐋  」❁════┅┄•╯', event.threadID, event.messageID)
const res = await axios.get(`https://nazrul-api.onrender.com/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
  return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
}
