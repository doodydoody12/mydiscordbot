module.exports = {

    name: 'muted',
    description: "Muting people",
    execute(message, args) {
     
        const target = message.mentions.users.first();
        if(target){

            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.member.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted!`)

        }else{
            message.channel.send('🤔 User does not exist!');
        }


    }
 
}