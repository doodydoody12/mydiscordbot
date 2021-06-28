module.exports = {

    name: 'commands',
    description: "Shows a list of the available commands!",
    execute(message, args, Discord) {
        console.log("Working");
        const commandsEmbed = new Discord.MessageEmbed()
        .setColor('#554846')
        .setTitle('Commands list')
        .setURL('https://i.postimg.cc/zftSmvqt/shadow.png')
        .setDescription("these are the DoodyBot commands")
        .addFields(
            {name: "Command one:", value: "^clear: Clears 1-100 messages (only certain roles can use this)"},
            {name: "Command two:", value: "^member: Gives you the member role if you dont have it for some reason"},
            {name: "Command three:", value: "^invite: Creates and sends an invite link to the chat"},
            {name: "Command four:", value: "^say_hi: Says hi"},
            {name: "Command five:", value: "^commands: Shows the list of commands that you can use"},
            {name: "Command six:", value: "^play: plays a song into the vc"},
            {name: "Command seven:", value: "^skip: skips the current queued song"},
            {name: "Command eight:", value: "^stop: stops the song and kicks DoodyBot out of the vc"},
            
        )
        .setImage('https://i.postimg.cc/zftSmvqt/shadow.png')
        .setFooter('Thank you for using DoodyBot ;)');
        message.channel.send(commandsEmbed);
    }   
    
}