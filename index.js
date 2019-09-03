const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE3Mzg5OTk0MzgxODAzNzUw.XW3GHQ.fUafgHodpl5wOJnv1zclkFt4ILs';

const PREFIX = '-';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'clear':
            if (!args[1]) return msg.reply('Error')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'flight757AKLtoCHC':
            if(!msg.member.roles.find(r => r.name === 'Flight Hoster')) return msg.channel.send("You don't have permissions")
            const times = (args[1])
            const embed = new Discord.RichEmbed()
            .setTitle('Flight happening now!', 'Flight')
            .addField('Hosted by:', msg.author.username)
            .addField('From:', 'Auckland Regional Airport')
            .addField('Destination:', 'Christchurch Regional Airport')
            .addField('Boarding time/notes', times)
            .addField('Airport link:', 'https://www.roblox.com/games/3610329337/Auckland-Regional-Airport-BETA')
            .setColor(0x24ff24)
            msg.channel.sendMessage('@everyone')
            msg.channel.bulkDelete(2)
            msg.channel.sendEmbed(embed);
            break;
    }
})
bot.login(token);
