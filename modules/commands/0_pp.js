module.exports.config = {
    name: "pp",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "nazrul",
    usePrefix: true,
    description: "𝙜𝙚𝙩 𝙮𝙤𝙪𝙧 𝙞𝙢𝙖𝙜𝙚",
    commandCategory: "image",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args,Users}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`_𝐘𝐨𝐮 𝐂𝐚𝐧 𝐔𝐬𝐞_ 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n\n${prefix}${this.config.name} User => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐭𝐚𝐤𝐞 𝐘𝐨𝐮𝐫 𝐎𝐰𝐧 𝐅𝐛 𝐏𝐢𝐜.\n\n${prefix}${this.config.name} User @[𝐓𝐚𝐠] => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐟𝐫𝐢𝐞𝐧𝐝'𝐬 𝐩𝐢𝐜.\n\n${prefix}${this.config.name} Box => 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐠𝐞𝐭 𝐲𝐨𝐮𝐫 𝐛𝐨𝐱 𝐩𝐢𝐜,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐆𝐞𝐭 𝐀𝐝𝐦𝐢𝐧 𝐏𝐢𝐜 ]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
       if(!imgg) api.sendMessage(`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫 ${threadInfo.threadName} ⛱️`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫 ${threadInfo.threadName} ⛱️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
          if(!img) api.sendMessage(`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫 ${threadInfo.threadName} ⛱️`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫 ${threadInfo.threadName} ⛱️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    var name = (await Users.getData(id)).name
    var callback = () => api.sendMessage({body:`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    var name = (await Users.getData(mentions)).name
    var callback = () => api.sendMessage({body:`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫${name} ⛱️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    var name = (await Users.getData(args[1])).name
    var callback = () => api.sendMessage({body:`𝐇𝐞𝐫𝐞'𝐬 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 🐥💫 ${name} ⛱️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
      }
