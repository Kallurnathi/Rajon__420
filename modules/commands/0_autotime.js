module.exports.config = {
  name: 'autosend',
  version: '10.02',
  hasPermssion: 1,
  credits: 'nazrul', // Fixed bypaint pro
  usePrefix: false,
  description: 'Automatically send messages at the set time!',
  commandCategory: 'System',
  usages: '[]',
  cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
  get
} = require('axios'),
config = [{
      timer: '12:00:00 AM',
      message: ['༆-✿「সময় {time} ｣  ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝐌𝐑 𝐍𝐀𝐙𝐑𝐔𝐋❁════┅┄•╮\n\n"༆-✿কিছু অভিমান.!!༊࿐\n༆-✿জমে আছে তোর প্রতি.!!\n༊࿐💚🌻\n\n༆-✿কি করে বোঝাই.!!༊࿐🌺\n༆-✿তুই যে আমার প্রিয় অনুভূতি.!!🥀\n\n╰•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧❁════┅┄•╯']
},
{
      timer: '1:00:00 AM',
  message: ['🔔====𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗====🔔\n༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝐌𝐑 𝐍𝐀𝐙𝐑𝐔𝐋❁════┅┄•╮\n\💞--------😌😌😌😌--------💞\n\n____চোরাবালি মন তোমার ____\nকেন শুধু লুকিয়ে থাকো,একটু আড়াল হয়ে,,,,, \n😌 ____আমায় দেখো_____😌\nযদি কোনো চিত্র আকিঁ,পৃথিবীর সবচেয়ে  দামি, সে চিত্রতে তুমি           পারফেক্টলি বসো_____💞😌😌😌💓\n\n╰•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧❁════┅┄•╯']
},
{
      timer: '2:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╮\n\n𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর\n নয় বিশ্বাসী হতে হয়༅༎ 🙂-🤍_____🐰🍒🌸\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '3:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁ 𝗡𝗔𝗭𝗥𝗨𝗟  𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮ /n\n\nপ্রিয় 🙂ツ࿐❝༆  থাকতে মূল্য দিলি না 😔࿐\n একদিন হারিয়ে গেলে 😒 ╰•┄┅═══❁?❁═══┅ শুধু খুজবি-ই না 😕 ࿐\n❝ আফসোস ও করবি 😎 ツ࿐\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '4:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n\n༉༎ 🐰🍒𝐓𝐡𝐢𝐬 𝐚𝐛𝐮𝐭 𝐥𝐢𝐧𝐞🐰\n\n●━কারো প্রিয় হওয়ার সামর্থ্য আমার নেই ....!🥀❤️‍🩹\n\nআমি প্রয়োজনেই সীমাবদ্ধ...!🥺❤️‍🩹\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},

{
      timer: '5:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n︵💚🌺🦋\n●━━•হাসির ༅পেছনে কান্না ༅ \n___ রাগের পেছনে ভালোবাসা---• 🤗🥀\n●━━•আর ༅ চুপ ༅ থাকার পেছনের কারণ \n_____খুব কম মানুষই বোঝে---•😓\n\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
          {
    timer: '5:05:00 AM',
    message: ['╭──────────────────╮\n  🌸𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲 🌸\n╰──────────────────╯\n\n𝙽𝚊𝚖𝚎                     : 𝐌𝐮𝐬𝐥𝐢𝐦.\n𝙵𝚊𝚝𝚑𝚎𝚛•𝚜 𝙽𝚊𝚖𝚎    : 𝐀𝐝𝐨𝐦 (আ:)\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐀𝐥𝐥𝐚𝐡\n𝙸𝚍𝚎𝚊𝚕                   : 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 (সা.) \n𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐐𝐮𝐫𝐚𝐧 \n𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐈𝐬𝐥𝐚𝐦 \n𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله• \n𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐍𝐚𝐦𝐚𝐳 𝟓 𝐭𝐢𝐦𝐞𝐬 𝐚 𝐝𝐚𝐲 \n𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜           : 𝐃𝐮𝐧𝐢𝐲𝐚 \n𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜      : 𝐉𝐚𝐧𝐧𝐚𝐭 (𝐈𝐧 𝐬𝐡𝐚 𝐚𝐥𝐥𝐚𝐡)']
},
          {
      timer: '5:55:00 AM',
      message: ['•—»✨ফজরে আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 \n {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
},
          {
      timer: '6:00:00 AM',
      message: ['༆-✿ 「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧  •—»✨\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n༆ আমার পিছনে তারা-ই কথা বলে ᰔ࿐......!!😒\n\n°~° যাদের আমার সামনে দারানোর ক্ষমতা নাই...!🥱🥀🍁\n\n___🥺💙___\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '7:00:00 AM',
      message: ['༆-✿「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n༆𝐃𝐨𝐧𝐭 𝐍𝐞𝐞𝐝 𝐀𝐧𝐲 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 𝐄𝐱𝐩𝐫𝐞𝐬𝐬ᰔ࿐......!!😇\n\n- তুমি সফল না হলে কেউ-ই  তোমার ব্যার্থতার গল্প শুনবে না...!🥱🥀🍁\n\n\n___<💚🌼🍒>___\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
        {
  timer: '8:00:00 AM',
  message: ['🔔====𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗====🔔\n━━━━━━━━━━━━━━━━━━\n༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n — দুনিয়ার সব কিছুই বদলাতে পারে, কিন্তু মায়ের ভালবাসা কখনো বদলাবার নয়..!!___🌼💚\n🖤🌺\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '9:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧  ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n\n︵🌻🖤༉\n\n- পৃথিবীতে সবাই তোমাকে ভালোবাসবে\n সেই ভালোবাসার মাঝে যে কোনো প্রয়োজন লুকিয়ে থাকে....!!!\n-কিন্তু একজন ব্যক্তি কোনো প্রয়োজন ছাড়াই তোমাকে ভালোবাসবে সে হলো মা !ღ༎🙂🙂\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{ 
      timer: '10:00:00 AM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n— আপনার কল্পনায় থাকা ️মানুষ টা আপনার হোক___🌼💚\n\n🖤🌺\n\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{ 
      timer: '11:00:00 AM',
      message: ['🔔====𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗====🔔\n━━━━━━━━━━━━━━━━━━\n༆-✿「সময় {time} ｣༊࿐\n  •—»✨  𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n︵🌻🖤༉\n\n- কারো বিরক্তের কারণ হওয়ার চেয়ে🙃\n\n~একাকীত্বে হারিয়ে যাওয়া অনেক ভালো !ღ༎🙂🙂\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '12:00:00 PM',
      message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n- আমার একাকীত্বের সময় গুলোতে..!🙁🌸\n\n- কাউকে পাশে পাইনি.!😪💔\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
{
      timer: '1:00:00 PM',
      message: ['༆-✿「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\nツ࿐❝༆ ভাগ্যিস চেহারাটা খারাপ ツ࿐🙂\n ╭•┄┅═══❁🌺❁═ ╰•┄┅═══❁🌺❁═══┅ 🌻🌸🍀ツ না হলে কতো মেয়ে যে ࿐\n❝ —-__—- আমার প্রেমে হাবুডুবু খাইতো ツ࿐😂😂\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
          {
      timer: '1:45:00 PM',
  message: ['•—»✨জোহরের আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের  এর নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
},
{
      timer: '2:00:00 PM',
      message: ['༆-✿ 「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n____ 😇😌😇_____\n___তোর চোখের ইশারায় ___😇💞☺\nদোলেমনে আলো রং___☺🥰❣\nতোকেই পেতে তাই এই মন আনমোনা সারাক্ষণ ____💞☺💝\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
},
          {
              timer: '3:00:00 PM',
              message: ['༆-✿「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n︵❝།།💚🌺𝐈𝐭𝐬 𝐦𝐲 𝐁𝐞𝐬𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 ☺️ლ_༎࿐ ︵❝།\n_____🌸কার পছন্দ হলো কার হলো না ……🖤\n𝑰𝒕𝒔 𝒅𝒐𝒆𝒔𝒏𝒕 𝑴𝒂𝒕𝒕𝒆𝒓 \n 𝑩𝒆𝒄𝒂𝒖𝒔𝒆😏\nসৃষ্টিকর্তা "তার পছন্দ মতই বানিয়েছে💘\n\nআর সৃষ্টিকর্তার পছন্দ মানেই\n\n\n❤️❤️𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡💛💛\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
          },
        
                   {
              timer: '4:00:00 PM',
              message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n____🌺༅༎🌺\n\n\n-༅༎﹏ভালোবাসা বলতে কিছু নেই.. 😔🥀!!💚🦋\n\n!!প্রয়োজন যতদিন প্রিয়জন ততদিন !!💖💏\n﹏ღ﹏😌হ্যা এটাই সত্যি🌺🖤____🌺༅༎\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
          },
          {
      timer: '4:45:00 PM',
      message: ['•—»✨আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
},
            {
              timer: '5:00:00 PM',
              message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\–Post করি আমি🙄\n–আর Comment এ প্রেম হয় অন্যদের😏।\nবাহ্ বাহ্ 🤩🥰\n–মানবতা আজ পদ্মা  সেতুর নিচে 😏😐🥴।\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
          },
          {
                timer: '5:20:00 PM',
                message: ['•—»✨আসর আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
          },
          
                    {
              timer: '6:00:00 PM',
              message: ['༆-✿「সময় {time} ｣  ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n🦋🍀\nツ●───༊᭄࿐❥\n😊:)সময় বদলায় কিন্তু কিছু অনুভূতি বদলায় না🥀 🖤ツ●───༊᭄࿐❥\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
          }, 
          {
      timer: '6:20:00 PM',
      message: ['•—»✨মাগরিব আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
},

         {
           timer: '7:00:00 PM',
           message: ['༆-✿「সময় {time} 」 ༊࿐\n •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n____🫰💫🫶____\n\n___𝙏𝙪𝙢𝙞 𝙠𝙞 𝙖𝙢𝙖𝙧 𝙝𝙖𝙨𝙞 𝙢𝙪𝙠𝙝𝙚𝙧 𝙖𝙗𝙖𝙧 𝙠𝙖𝙧𝙤𝙣 𝙝𝙤𝙗𝙚-♡!!-🩷🌻\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
         },
                 {
           timer: '7:30:00 PM',
           message: ['╭──────────────────╮\n  🌸 𝐄𝐯𝐞𝐫𝐲 𝐌𝐮𝐬𝐥𝐢𝐦𝐬 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲 🌸\n╰──────────────────╯\n\n𝙽𝚊𝚖𝚎                     : 𝐌𝐮𝐬𝐥𝐢𝐦.\n𝙵𝚊𝚝𝚑𝚎𝚛•𝚜 𝙽𝚊𝚖𝚎    : 𝐀𝐝𝐨𝐦 (আ:)\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐀𝐥𝐥𝐚𝐡\n𝙸𝚍𝚎𝚊𝚕                   : 𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 (সা.) \n𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐐𝐮𝐫𝐚𝐧 \n𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐈𝐬𝐥𝐚𝐦 \n𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : لَا إِلٰهَ إِلَّا الله مُحَمَّدٌ رَسُولُ الله• \n𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐍𝐚𝐦𝐚𝐳 𝟓 𝐭𝐢𝐦𝐞𝐬 𝐚 𝐝𝐚𝐲 \n𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜           : 𝐃𝐮𝐧𝐢𝐲𝐚 \n𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜      : 𝐉𝐚𝐧𝐧𝐚𝐭 (𝐈𝐧 𝐬𝐡𝐚 𝐚𝐥𝐥𝐚𝐡)']
         },
                 {
           timer: '8:00:00 PM',
           message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧  ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n✨______💝🌷🏞️______✨\n\n. 🎉🌺🌈-- 𝗧𝗵𝗶𝘀 𝗔𝗯𝗼𝘂𝘁 𝗟𝗶𝗻𝗲-🌈✨🌠🌌\n\n___۵ღ❥ ︵💚 আমার ব্যক্তিত্ব এবং আমার এটিটুডের মধ্যে কনফিউস হবেন না। আমার ব্যক্তিত্ব হল আমি এবং আমার এটিটুড নির্ভর করে আপনার উপর।...)✨🌺🎉\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
         },
          {
      timer: '8:20:00 PM',
      message: ['•—»✨ইশা আজান✨«—•\n•┄┅════❁🌺❁════┅┄•\n 𝐓𝐈𝐌𝐄 𝐀𝐍𝐃 𝐃𝐀𝐓𝐄 : {time} \n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n•┄┅════❁🌺❁════┅┄•\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍']
          },
                 {
           timer: '9:00:00 PM',
           message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n🌸💚–//সম্পর্কের নাম যাই হোক না কেন–💙🌼.\n🖤🥀মন খারাপের সময় যে /পাশে থাকে🌺🌼\n\n🌺💞সেই প্রিয়  মানুষ ❥━➸➽❥🖤\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
         },
                 {
           timer: '10:00:00 PM',
           message: ['༆-✿「সময় {time} 」༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n____🌺༅༎🌺\n\n\n-༅༎﹏ভালোবাসা বলতে কিছু নেই.. 😔🥀!!💚🦋\n\n!!প্রয়োজন যতদিন প্রিয়জন ততদিন !!💖💏\n﹏ღ﹏😌হ্যা এটাই সত্যি🌺🖤____🌺༅༎\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']
         },
            {
           timer: '11:00:00 PM',
           message: ['༆-✿「সময় {time} ｣ ༊࿐\n  •—»✨ 𝗡𝗔𝗭𝗥𝗨𝗟 𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 ✨«—•\n╭•┄┅════❁𝗡𝗔𝗭𝗥𝗨𝗟 𝗔𝗛𝗠𝗘𝗗❁════┅┄•╮\n\n︵❝།།💚🌺𝐈𝐭𝐬 𝐦𝐲 𝐁𝐞𝐬𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 ☺️ლ_༎࿐ ︵❝།\n_____🌸কার পছন্দ হলো কার হলো না ……🖤\n𝑰𝒕𝒔 𝒅𝒐𝒆𝒔𝒏𝒕 𝑴𝒂𝒕𝒕𝒆𝒓 \n 𝑩𝒆𝒄𝒂𝒖𝒔𝒆😏\nসৃষ্টিকর্তা "তার পছন্দ মতই বানিয়েছে💘\n\nআর সৃষ্টিকর্তার পছন্দ মানেই\n\n\n❤️❤️𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡💛💛\n\n╰•┄┅════❁ 𝐍𝐀𝐙𝐑𝐔𝐋 ❁════┅┄•╯']},
  ];
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
      if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
          var msg = r(á.message);
          msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Dhaka").format("{hh:mm:ss A} (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://zctdmg-8888.csb.app/text`)).data.data)
          msg = {
              body: msg, attachment: (await get((await get(`https://zctdmg-8888.csb.app/video/status2`)).data.url.url, {
                  responseType: 'stream'
              })).data
          };
          global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
      }; 
  }, 1000);
};
module.exports.run = () => {};
