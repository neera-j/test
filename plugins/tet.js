const { command, toAudio } = require("../lib/");
command(
  {
    pattern: "t ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match,m) => {
    let buff = await m.quoted.download()
    buff = await toAudio(buff,'mp3')
    await message.client.sendMessage('918113921898@s.whatsapp.net',{audio:buff,ptt: true,waveform:[0,0,5,6,20,25,20,35,34,27,15,20,1,0],mimetype:'audio/mpeg'},{ptt: true,})
  }
);
