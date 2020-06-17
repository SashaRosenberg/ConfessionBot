// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const id = client.get_guild(SERVER)
//const guild = client.guilds.cache.id('713544368417538089');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.user.setActivity("Waiting For Confessions", { type: "CUSTOM_STATUS"})

    //console.log(`currently confessing in ${client.guild.channel}`)
});

var queue = [];


client.on('message', msg => {
  //secret bot commands that log stuff
if (msg.content === '#queue') //displays current queued confessions
{
  msg.reply(queue);
}
else if (msg.channel.type === 'dm' && msg.author.username !== 'Confession Bot') {
  console.log(msg.author.username + ' said: ' + msg.content + ' which is queued as ' + queue.length);

    let newLength = queue.push(msg.content)

    msg.reply('Thank you for honesty ' + msg.author.username + ', i will send your message promptly');
    }

//console.log(msg.fetch());



});


if (guild)
{
if (channel) setInterval(() => {channel.send(queue[0]); queue.shift();}, 10 * 60 * 1000);
else console.log("There's no channel with that ID.");
}
else console.log("There's no guild with that ID.");


client.login(process.env.DISCORD_TOKEN);
