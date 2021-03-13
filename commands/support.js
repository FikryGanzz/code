const { MessageEmbed } = require("discord.js")

module.exports = {
name: "support",
  description: "Support Bot Ini Pakai Cara Ini!",
  run: async (client, message, args) => {
    
    const embed = new MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setColor("RED")
    .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
    .addField('*Invite Bot (#)*', '[MeonD Classic](https://bit.ly/3qMyEP6)')
    .addField('*Invite Bot (?)*', '[MeonD Music](https://bit.ly/37zwFpC)')
    .addField('*Join Official MeonD Server*', '[Official Server](https://discord.gg/VcUDXzJagn)')
    .addField('Belum Jadi', '`Vote Bot Ini`')
    .addField('Belum Jadi', '`Vote Bot Musik`')
    .setFooter(client.user.tag, client.user.displayAvatarURL())
.setTimestamp()
    message.channel.send(embed)
   }
}
