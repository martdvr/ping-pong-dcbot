/* 

Ping-Pong Discord Javascript Bot
Mart - October 1, 2020

*/

const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", function () {
	console.log("Ready for some good old ping pong!");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });
  

client.login(' super secret token :-) ');