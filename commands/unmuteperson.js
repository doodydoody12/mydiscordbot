module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args, cmd, client, Discord){
        if(message.member.roles.cache.has('762327910702383125')){

            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
     
                let memberTarget= message.guild.members.cache.get(target.id);
     
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);
            } else{
                message.channel.send('🤔Cant find that member!');
            }
        }else{
            message.channel.send('You do not have the required role to use this command!');
        }

    }
}