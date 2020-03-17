const Discord = require('discord.js');
const { token } = require('./auth.json');
//Import the Discord.js library 

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Started');
});

client.on('message', message => {
    if (!message.guild) return; 
    if (message.content === 'Hello') {
        return message.channel.send('Hello World!');
    }
});

client.login(token);