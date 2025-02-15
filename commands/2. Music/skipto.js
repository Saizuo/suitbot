const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('skipto')
    .setDescription('Skips to the specified song in the queue.')
    .addIntegerOption(option => option.setName('track').setDescription('The track to skip to.').setRequired(true)),
  async execute (interaction) {
    const track = interaction.options.getInteger('track')
    const queue = interaction.client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.nowPlaying) { return await interaction.reply(simpleEmbed('Nothing currently playing.\nStart playback with /play!', true)) }
    if (track < 1 || track > queue.songs.length - 1) { return await interaction.reply(simpleEmbed(`You can only specify a song number between 1-${queue.songs.length - 1}`, true)) }
    queue.songs = queue.songs.slice(track - 1)
    const song = queue.skip()
    await interaction.reply(simpleEmbed(`⏭ Skipped to \`#${track}\`: **${song.name}**.`))
  }
}
