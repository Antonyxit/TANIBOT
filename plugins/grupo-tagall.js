const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*🌤️@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒* ${pesan}`
let teks = `*🌸𝘼𝙉𝙄𝙈𝙊 𝙋𝙍𝙀𝘾𝙄𝙊𝙎@𝙎 𝙏𝘼𝙉𝙄 𝘽𝙊𝙏 𝙏𝙀 𝙄𝙉𝙑𝙊𝘾𝘼🌸*\n${oi}\n\n*✨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `🌸 @${mem.id.split('@')[0]}\n`}
teks += `𝙏𝘼𝙉𝙄 𝘽𝙊𝙏`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
