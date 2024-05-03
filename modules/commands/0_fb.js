const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "fb",
  version: "1.0.",
  hasPermssion: 0,
  credits: "nazrul",
  usePrefix: true,
  description: "Facebook Video Downloader",
  commandCategory: "video downloader",
  usages: "[Fb video link]",
  cooldowns: 2
};

module.exports. run = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid Facebook video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜 𝙋𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 😷💔", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const response = await axios.get(`https://nazrul-apis-07.onrender.com/nazrul/fb?url=${encodeURI(link)}`);
    await fs.ensureDir(path);
   path += 'N4ZR9L.mp4';
    const data = response.data.url;
    const vid = (await axios.get(data.url, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `🐸💔`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
