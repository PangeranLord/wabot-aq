let fs = require('fs')
let chalk = require('chalk')
let tum1 = fs.readFileSync('./gambar1.jpeg')
let tum2 = fs.readFileSync('./gambar2.jpeg')
//let tum3 = fs.readFileSync('./gambar3.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
teks = `${kyun(runtime)}`
run = `${kyun(runtime)}`

global.owner = ['6288286056744','6287832147584']// Put your number here
global.mods = ['6287832147584'] // Want some help?
global.prems = ['6287832147584','6288286056744'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '9db5a5373433c015',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
// var sticker_name = 'I hope you\'re fine'
//var sticker_author = 'Nurutomo'
var sticker_name = '©Pangeran' // ganti aja
var sticker_author = 'ig:abengrndna_' // ganti aja
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// Tambahan By Me (RyuuZeyy)
gc1 = 'https://chat.whatsapp.com/CqEo783CDhiC5LbQyta1Kv'
gc2 = 'https://chat.whatsapp.com/CqEo783CDhiC5LbQyta1Kv'
gc3 = 'https://chat.whatsapp.com/I3yAMaBNA9X63FspQ5V46N'
namaig = 'https://instagram.com/abengrndna_'
linkf = gc1
linkff = namaig
namabot = 'PangeranBotZ'
namagithub = 'donasi dulu baru gua kasih SC nya!'
gcid = '972502255007-1406453544'
footer = 'Pangeran'
lolkey = 'rey2k21'
global.wait = 'Tunggu Sebentar Jamet!'
bc = 'Pangeran'
titler = '𝙍𝙚𝙖𝙡 𝙁𝙖𝙢𝙨 𝙆𝙞𝙡𝙡𝙚𝙧'
body = run
kasihcaption = `©${namaig}\n\n©${namagithub}`
gambar1 = tum1
gambar2 = tum2
