const { Client, Intents }= require('discord.js');

const cliente= new Client({
  intents: [Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_VOICE_STATES
          ]
});
