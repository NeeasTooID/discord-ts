// App.js

require('dotenv').config();
const Discord = require('discord.js');
const { exec } = require('child_process');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.content.startsWith('!t')) {
    const command = msg.content.slice(3).trim();
    exec(command, (error, stdout, stderr) => {
      if (error) {
        msg.reply(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        msg.reply(`Error: ${stderr}`);
        return;
      }
      msg.channel.send(`\`\`\`${stdout}\`\`\``);
    });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
