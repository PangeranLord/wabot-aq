let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '_*Uhm...username nya mana?*_\n*Contoh: pangerann21_*'
  let res = await fetch(global.API('xteam', '/dl/igstalk', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    full_name,
    username,
    is_verified,
    media_count,
    follower_count,
    following_count,
    biography,
    external_url,
    profile_pic_url,
    hd_profile_pic_url_info,
    is_private
  } = json.result.user
  let pp = hd_profile_pic_url_info.url || profile_pic_url
  let caption = `
${full_name} *(@${username})* ${is_verified ? '✓' : ''}
https://instagram.com/${username}
${is_private ? 'Post Hidden by User' : ('*' + media_count + '* Post(s)')}
Following *${following_count}* User(s)
*${follower_count}* Followers
*Bio:*
${biography}${external_url ? '\n*External URL:* ' + external_url : ''}
`.trim()
  if (pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
  else m.reply(caption)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
handler.limit = true
handler.premium = true

module.exports = handler
