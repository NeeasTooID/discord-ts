// App.js

import React, { useEffect } from 'react';
import Discord from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

function App() {
  useEffect(() => {
    const client = new Discord.Client();

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
      if (msg.content === '!ping') {
        msg.reply('Pong!');
      }
    });

    client.login(process.env.DISCORD_BOT_TOKEN);

    return () => {
      client.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Discord Bot with React</h1>
      <p>Check console for bot activity.</p>
    </div>
  );
}

export default App;
