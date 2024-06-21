let handler = m => m
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
	
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `${global.packname} ║ ✅ 𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢 𝗤𝗨𝗘 𝗟𝗟𝗘𝗩𝗔 𝗔𝗖𝗧𝗜𝗩𝗢 𝗘𝗟 𝗕𝗢𝗧  ${uptime} ⌛ ║ TANI BOT 𝗦𝗜 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 𝗠𝗜𝗦 𝗦𝗘𝗥𝗩𝗜𝗖𝗜𝗢𝗦 𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗔𝗧𝗘 𝗖𝗢𝗡 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥𝗔 +𝟱𝟮 𝟭 𝟵𝟵𝟰 𝟭𝟬𝟴 𝟬𝟱𝟰𝟴`
await this.updateProfileStatus(bio).catch(_ => _)
setting.status = new Date() * 1
} 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' » ', h, ' ・ ', m, ' ・ ', s].map(v => v.toString().padStart(2, 0)).join('') 
} 
