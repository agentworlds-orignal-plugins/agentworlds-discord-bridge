 module.exports = function (options) {
   return function (client,verify) {
     // this will verify if it is agentworlds plugin
     if (!verify) {
        
        return {agentworlds:true,github_url:"https://github.com/agentworlds-orignal-plugins/agentworlds-discord-bridge"}
     }
     console.log('Thanks for using AgentWorlds + Discord Bridge. Find more at https://github.com/agentworlds-orignal-plugins')
     var Discord = require('discord.js')
     var bot = new Discord.Client(options.token)
     var channel = bot.channels.get(options.channelid);
     bot.on('message',function (message) {
        if (message.channel == channel) {
            if (message.author.bot) return;
            client.speak(message.author.username+' :'+message.content)
        }
     })
     client.socket.on('r_speak',function (msg,id) {
        channel.send(`**${id}: ${msg}**`)
     })
     
  }
  }
