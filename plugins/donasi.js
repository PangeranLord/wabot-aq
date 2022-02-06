let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • myXL
│ • 0878-3214-7584
╰────

╭─「 Donasi • Bank Virtual 」
│ • OVO
│ • 0878-3214-7584
│ • DANA
│ • 0878-3214-7584
│ • GOPAY
│ • 0878-3214-7584
╰────

╭─「 Donasi • Website 」
│ • https://saweria.co/PangeranLord
│ • https://trakteer.id/PangeranLord
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
