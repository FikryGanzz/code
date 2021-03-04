const Discord = require("discord.js");
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");

const express = require("express")
const app = express ()

app.get("/", (req, res) => {
  res.sendStatus(200)
})

app.listen(process.env.PORT)

client.on("ready", async () => {
  console.log(`${client.user.tag} Berhasil Online!`);
//client.user.setActivity("Jangan Lupa Subscribe");kalian bisa hapus bagian ini 
  const status = [
    `#help || Maitenance`,
    `With ${client.users.cache.size} User & ${client.guilds.cache.size} Server` //gunanya untuk count server yang dimasuki oleh bot
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "PLAYING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 3000)
});
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.content === "Indonesia") message.reply(":flag_id:");
  
  if (message.content === "Lmao") message.channel.send(":rofl:");
      
const prefix = "#"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;
  


let commandFiles;
try{
  commandFiles = require(`./commands/${cmd}.js`)
} catch (err) {
  return message.reply("Perintah Tidak Ditemukan Atau Belum Dibuat");
}
const db = require("quick.db")
const now = Date.now()
if(db.has(`cd_${message.author.id}`)) {
  const expirationTime = db.get(`cd_${message.author.id}`) + 3000
  if(now < expirationTime) {
  const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`Silahkan Tunggu ${timeLeft.toFixed(1)} Detik Lagi Sebelum Menggunakan Perintah \`${prefix}${cmd}\` Lagi.`);
}
}
  db.set(`cd_${message.author.id}`, now);
  setTimeout(() => {
    db.delete(`cd_${message.author.id}`)
  },3000)
try {
  commandFiles.run(client, message, args)
} catch (err) {
  } finally {
    console.log(`${message.author.tag} Memakai Perintah ${prefix}${cmd}`)
  }
  
});
client.login(process.env.TOKEN);
//Token Bot Taruh Di .env > add variable > nama : TOKEN > Masukin Tokrn Bot




//
