const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
exports.run = async (client, message) => {
  let embed1 = new MessageEmbed()
  .setTitle('Set Sendiri')
  .setColor('RED')
  .setAuthor('Set Sendiri')
  .setFooter('Set Sendiri')
  .addField('Set Sendiri', 'Set Sendiri')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Set Sendiri') //ini cuma contoh
  .addField('Set Sendiri', 'Set Sendiri', true)
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()
  
  let embed2 = new MessageEmbed()
  .setTitle('Set Sendiri')
  .setColor('RED')
  .setAuthor('Set Sendiri')
  .setFooter('Set Sendiri')
  .addField('Set Sendiri', 'Set Sendiri')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Set Sendiri') //ini cuma contoh
  .addField('Set Sendiri', 'Set Sendiri', true)
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()
  
  let embed3 = new MessageEmbed()
  .setTitle('Set Sendiri')
  .setColor('RED')
  .setAuthor('Set Sendiri')
  .setFooter('Set Sendiri')
  .addField('Set Sendiri', 'Set Sendiri')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Set Sendiri') //ini cuma contoh
  .addField('Set Sendiri', 'Set Sendiri', true)
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()
  
  new Menu(message.channel, message.author.id, [
            {
                name: "main",
                content:embed1,
                reactions: {
                    "⏹": "stop",
                    "▶": "next"
                }
            },
            {
                name: "otherPage",
                content: embed2,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
                    "▶": "next"
                }
            },
            {
                name: "otherPageAgain",
                content: embed3,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous"
                }
            }
        ]);
}
