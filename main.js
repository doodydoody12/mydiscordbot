const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handlers', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})





client.login('ODU4ODA5NjgxNTE4MDAyMTg3.YNji1w.F2eLKjhch8SqbgGTU0NC3Rgm_Ec');