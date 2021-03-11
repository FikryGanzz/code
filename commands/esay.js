const discord = require('discord.js')

module.exports = {
      run: async (client, msg, args) => {
          let embedtext = args.slice(0).join(" ")
          if(!embedtext) return msg.channel.send("`#esay <Kata-Kata>`\n               ^^^^^^^^^^\n**Isi Kata-Kata Yg Dibagian Atas Tanda Panah!**")

           let embed = new discord.MessageEmbed()
           .setColor("RED")
           .setAuthor(`Requested By: ${msg.author.tag}`)
           .setDescription(embedtext)
           .setFooter(client.user.tag, client.user.displayAvatarURL())
           .setTimestamp()
           msg.channel.send(embed);

       }
}
