require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
   if (msg.content === 'I love Arnav'){
       msg.react('❤️')
   }

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
   if (msg.content === 'asees kuta') {
    msg.reply('True bro');
  }
});

client.login(process.env.BOT_TOKEN)
