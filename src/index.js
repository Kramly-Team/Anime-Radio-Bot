//Imports
import {Client, Intents} from 'discord.js';

//Init
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS] });

//Settings
client.settings = {
    1: 'ayy',
    2: 'lmao'

}


// On ready - Do this when the bot connects
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client.commands.get('ayy').name);
});


// On Guild Join
client.on('guildCreate', (guild) => {
    console.log(`Joined ${guild.name}!`);
    guild.channels.cache.get(guild.systemChannelID).send(`Hello! I am ${client.user.tag}!`);
    guild.channels.cache.get(guild.systemChannelID).send(`My prefix is ${client.settings[guild.id]}`);
});   

// On Member Join
client.on('guildMemberAdd', (member) => {
    console.log(`${member.user.tag} joined ${member.guild.name}!`);
    member.guild.channels.cache.get(member.guild.systemChannelID).send(`Welcome ${member.user.tag}!`);
});

client.login('TOKEN');



