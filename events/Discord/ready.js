const { ActivityType } = require('discord.js');

module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\nlets play some music!`);
    client.user.setActivity('/help & /play', { type: ActivityType.Listening });	
};