# discord_cleverbot
### Simple cleverbot script running with nodejs
[![npm](https://img.shields.io/npm/v/npm.svg)]()[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

---
##### Install

```bash
git clone https://github.com/msniveau/discord_cleverbot.git
cd discord_cleverbot
npm install
```
#
##### Config
* Rename the file config.ini.dist to config.ini
###### Discord
* Create a new app at the [developer section of discord](https://discordapp.com/developers/applications/me)
* Enable the Bot functions
* Paste the token of the bot in the config.ini
###### Cleverbot
* Create a new token on the [cleverbot website](https://www.cleverbot.com/api/my-account/)
* Paste the access token in the config.ini


##### Run the bot
I'd recommend using the screen command to keep this window open
```bash
screen -dmS cleverbot npm start
```

Or if you want to use forever:
```bash
npm install forever -g
forever start client.js
```
#
##### Bring it up to your server
You can test the bot if you add [this bot](https://discordapp.com/oauth2/authorize?client_id=291304393180184596&scope=bot&permissions=0) to your server
To add your bot to your server, you can use the following url to select the server the bot should be running on:


discordapp.com/oauth2/authorize?client_id=[clientid](https://discordapp.com/developers/applications/me)&scope=bot&permissions=0

##### Functions
The bot responds to every message in every channel which starts with "?".
Normal messages will be ignored.
Every channel has it's own conversation history
