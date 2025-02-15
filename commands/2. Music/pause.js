const { SlashCommandBuilder } = require('@discordjs/builders')
const { simpleEmbed } = require('../../utilities')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pauses playback.'),
  async execute (interaction) {
    const queue = interaction.client.player.getQueue(interaction.guild.id)
    if (!queue || !queue.nowPlaying) { return await interaction.reply(simpleEmbed('Nothing currently playing.\nStart playback with /play!', true)) }
    queue.setPaused(queue.paused !== true)
    await interaction.reply(simpleEmbed(queue.paused === true ? '⏸ Paused.' : '▶ Resumed.'))
  }
}
