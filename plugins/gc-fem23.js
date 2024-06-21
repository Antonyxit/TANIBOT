let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ANOTENSE AL VERSUS PLANTITAS💗 ${pesan}`
let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}💗`}
teks += `
│
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│       
│      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘢:
│         𝐇𝐎𝐑𝐀𝐑𝐈𝐎
│     🇨🇴 𝑪𝑶𝑳𝑶𝑴𝑩𝑰𝑨 : 
│     🇲🇽 𝑴𝑬𝑿𝑰𝑪𝑶 :      
│
│ㅤㅤʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:
│ㅤ🌸• 
│ㅤ🌸• 
│ㅤ🌸• 
│ㅤ🌸•
│   ㅤㅤ
│ㅤㅤʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
│ㅤ🌸•
│ㅤ🌸•
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳𝘢 𝘥𝘦 𝘴𝘢𝘭𝘢: 
│
╰───────────────๑❀๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['femenino23 <mesaje>','fem23 <mesaje>']
handler.tags = ['group']
handler.command = /^(femenino23|fem23)$/i
handler.admin = true
handler.group = true
export default handler
