var Discord = require('discord.io'),
    request = require('request'),
    fs      = require('fs'),
    ini     = require('ini');

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
 
var cleverbot = {
    apiurl: "http://www.cleverbot.com/getreply",
    apikey: config.cleverbot.apikey,
    };
var cs = {};
var bot = new Discord.Client({
    token: config.discord.token,
    autorun: true,
});
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
bot.on('message', function(user, userID, channelID, message, event) {
    if (message.substring(0,1) === config.cleverbot.indicator) {
        request({
            url: cleverbot.apiurl +
                 "?key=" +
                 cleverbot.apikey +
                 "&input=" +
                 message.replace("/^" + config.cleverbot.indicator + "+/", "") +
                 "&cs" +
                 cs[channelID],
            json: true
        }, function (error, response, body) {
             if (!error && response.statusCode === 200) {
                 console.log(user + " : " + message.replace("/^" + config.cleverbot.indicator + "+/", ""));
                 console.log("Cleverbot: " + body["interaction_" + body.interaction_count + "_other"]);
                 cs[channelID] = body.cs;
                 bot.sendMessage({
                     to: channelID,
                     message: body["interaction_" + body.interaction_count + "_other"]
                 });
             }
        });
    }
});
