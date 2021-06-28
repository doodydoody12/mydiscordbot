const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '^';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)

}



client.once('ready', () => {
  console.log("DoodyBot is online!");
});

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
// say hi
  if(command === 'say_hi'){
    message.channel.send('Hi!');
//clear messages
  } else if(command === 'clear'){
    client.commands.get('clear').execute(message, args);
// invite link
  } else if(command === 'invite'){
    message.channel.send("https://discord.gg/KtnqRYbE")
// member role
  }else if(command === 'member'){
    client.commands.get('member').execute(message, args);
//commands
  }else if(command === 'commands'){
    client.commands.get('commands').execute(message, args, Discord);
//music - play
  }else if(command === 'play', 'p'){
    client.commands.get('play').execute(message,args, command, client, Discord);
//music - skip
  }else if(command === 'skip'){
    client.commands.get('play').execute(message,args, command, client, Discord);
//music - stop
  }else if(command === 'stop', 's'){
    client.commands.get('stopmusic').execute(message,args, command, client, Discord);
  }

});




client.login(process.env.token);
