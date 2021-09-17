![logo](https://repository-images.githubusercontent.com/406747355/0c0fcbbd-8dab-4259-a5d6-d8cc5069ef37)

# SuitBot

> A lightweight music and general purpose bot, that uses slash commands and buttons to be as user-friendly as possible!

It uses [discord.js](https://discord.js.org/) and [Discord Music Player](https://discord-music-player.js.org/) for its main features.

## Availability
I'm currently hosting the bot myself, and it is publicly available with this invite link:\
[![invite](https://img.shields.io/static/v1?style=flat&logo=discord&label=&labelColor=212121&message=Invite&color=212121)](https://discord.com/api/oauth2/authorize?client_id=887122733010411611&permissions=2167425024&scope=bot%20applications.commands)

## Commands & Features
SuitBot uses slash commands to integrate itself into the server. You can easily access its commands directly by typing `/` in your chat window.

### General
Command      | Description
------------ | ---
/github      | Sends a link to the repo of this bot.
/help        | Replies with help on how to use this bot.
/move        | Moves the mentioned user to the specified channel.
/moveall     | Moves all users from the first channel to the second channel.
/ping        | Replies with the current latency.
/purge       | Clears a specified amount of messages.
/uptime      | Tells you how long the bot has been running.

### Music
Command      | Description
------------ | ---
/clear       | Clears the queue.
/nowplaying  | Shows the currently playing song.
/pause       | Pauses playback.
/play        | Searches and plays a song or playlist from YouTube or Spotify.
/queue       | Displays the queue.
/remove      | Removes the specified track from the queue.
/repeat      | Sets the current repeat mode.
/resume      | Resumes playback.
/seek        | Skips to the specified point in the current track.
/shuffle     | Shuffles the queue.
/skip        | Skips the current song.
/stop        | Stops playback.
/volume      | Sets the volume of the music player.



## Running the Bot
You'll need Node.js v16.x and FFmpeg v4.4.\
Installing SuitBot:

```shell
git clone https://github.com/MeridianGH/suitbot.git
cd suitbot
npm install
```
Rename `config_example.json` to `config.json` and replace the placeholders inside with your info:
- A Discord Bot Token (**[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**)
- Your Application ID which you can find the the `General Information` tab in your Discord application.
- The Guild ID of the server in which you want to test the bot. To get this ID, activate `Developer Mode` in Discord's options and right-click your server.

Use `node deploy-commands.js` to update and add commands in the guild you specified and `node deploy-commands-global.js` to update the commands in every guild the bot is in.\
Guild commands are refreshed instantly while global commands can take up to an hour.

Start the bot with
```shell
node main.js
```

### Heroku
It is also possible to install and run the bot in Heroku.\
Add your fork of this repository as a GitHub source, add the buildpacks listed below and place your bot token as `token`in the config vars.
```
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
```

Make sure to deploy your commands using `node deploy-commands.js` or `node deploy-commands-global.js` when developing new commands before running the bot, as both those files can not be executed on Heroku.

## License
```
MIT License

Copyright (c) 2021 MeridianGH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```