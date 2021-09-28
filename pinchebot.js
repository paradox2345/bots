const { Client, Intents }= require('discord.js');

const cliente= new Client({
  intents: [Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_VOICE_STATES
          ]
});
const prefix = "--#";
cliente.on('messageCreate', message => {
  if (!message.content.startsWith(prefix)) return;
   if (message.content==="crear") {
        console.log("todo bien por ahora);
      })
  })
