const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ᴹᴿᤎ KhairilOfcི ࿇;;;\nFN:ᴹᴿᤎ KhairilOfcི ࿇\nitem1.TEL;waid=601123550412:+60 11-2355 0412\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:ᴹᴿᤎ KhairilOfcི ࿇\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
