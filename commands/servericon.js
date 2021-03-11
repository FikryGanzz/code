const { MessageEmbed } = require('discord.js')

module.exports = {
name: "servericon",
  description: "Menampilkan Icon Server",
  run: async (client, message, args) => {
    
    const embed = new MessageEmbed()
    .setTitle(`Icon Server ${message.guild.name}`)
    .setColor('RED')
  .setImage(message.guild.iconURL({dynamic : true, size: 4096}))
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    
    message.channel.send(embed)
    }
}
