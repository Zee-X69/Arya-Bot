let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: rizky ramadhani
╠➥ Script: @ZEE-X
║
╠➥ Github: https://github.com/Zee-X69
╠➥ Instagram: @rizky_rmdn06
╠➥ YouTube: --
║
╠═〘 Thanks To 〙 ═
╠➥ ZEE
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ indosat: 0856-0703-5686
╠➥ --
╠➥ --
║
║>Request? Wa.me/6285607035686
║
╠═〘 ZEE BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

