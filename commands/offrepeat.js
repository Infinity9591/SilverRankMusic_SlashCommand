const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const play = require('../commands/play.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('offrepeat')
        .setDescription('Off Repeat')
    , async execute(interaction){
        if (!play.serverQueue) return interaction.reply("((((=???");
        const embedOffRepeat = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setDescription(`:notes: Ngừng lặp lại bài: ${play.serverQueue.songs[0].title}`)
            .setTimestamp(new Date())
            .setFooter({
                text: 'Create by Infinity9591 with GitHub Source',
                iconURL: 'https://static.tvtropes.org/pmwiki/pub/images/genshin_memetic.jpg'
            });
        play.serverQueue.repeat = false;
        return interaction.reply({embeds : [embedOffRepeat]});
    }
}