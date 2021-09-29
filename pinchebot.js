const { Client, Intents }= require('discord.js');

const cliente= new Client({
  intents: [Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_VOICE_STATES
          ]
});




cliente.on('voiceStateUpdate', (oldState, newState) => {


      const joined =!!newState.channelId;

      const boleano = joined ? newState.channelId : oldState.channelId;

      let voiceChannel = cliente.guilds.cache.get("873421230299033650").channels.cache.get(boleano);
      const cosi=voiceChannel.members.size

      const mantanga= voiceChannel.parentId;

      if (cosi < 1 && mantanga==="891449034735222795") {
        console.log("si se borro");
      voiceChannel.delete();
      }
      else {
        console.log(cosi);
        console.log("mantener abierto");
      }


});

 const prefix = "--@";

  function alf(primero){
    const palabras=primero.split(" ", 3);
    const [first,second,tird]= palabras;

   if (first=="--@crear" && second < 5 && tird.length < 7) {
     return  true;
   }
   else {
     console.log("comando incorrecto")
   }
 }


cliente.on('messageCreate', message => {
  if (!message.content.startsWith(prefix)) return;

   if (alf(message.content)) {
     const dividir=message.content.split(" ", 3);
      const [namae,ichido,sanmae]=dividir;
    message.guild.channels.create(sanmae, {
 type: 'GUILD_VOICE',
 parent: '891449034735222795' ,
 userLimit:ichido,

})



  }
});
