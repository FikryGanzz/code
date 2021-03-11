const discord = require('discord.js')

exports.run = async(client, message, args) => {
  let say = args.join(' ')
  if(!say) return message.channel.send("`#say <Kata-Kata>`\n             ^^^^^^^^^^\n**Isi Kata-Kata Yg Dibagian Atas Tanda Panah!**")
  message.channel.send(say)
}
