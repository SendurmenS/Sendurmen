const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x:', '`youtuber-ifşa` Adlı Komutu Özel Mesajlarda Kullanamazsın !!!')
  return message.author.sendEmbed(ozelmesajuyari).then(msg => {msg.delete(3500)})};

    let replies = ["https://cdn.discordapp.com/attachments/459016059475984385/459016257715568651/maxresdefault.jpg", "https://cdn.discordapp.com/attachments/458736288804110347/459042067436404759/-gereksiz-odadan-emrecan-sandalyeden-dustu_9298212-00_640x360.jpg", "https://cdn.discordapp.com/attachments/458736288804110347/459042083475423242/en-zor-minecraft-2-bolum_9838865-00_1920x1080.jpg", "https://cdn.discordapp.com/attachments/458736288804110347/459042098692227082/altin-bicaga-giden-yol-bugraak-cs-goda-1-silah-yarisi_9876801-00_1920x1080.jpg", "https://cdn.discordapp.com/attachments/458736288804110347/459042102450454538/minecraft-evi-vs-gereksiz-oda_10052981-00_1800x945.jpg", "https://cdn.discordapp.com/attachments/459016059475984385/459018412325077003/duyuru_8178047-17700_1280x720.jpg", "https://cdn.discordapp.com/attachments/459016059475984385/459016279865688064/m151128_26332.jpg", "https://cdn.discordapp.com/attachments/459016059475984385/459016283036581889/maxresdefault_1.jpg", "https://cdn.discordapp.com/attachments/459016059475984385/459016301294125058/pewds2_scy9.jpg"];
    let result = Math.floor((Math.random() * replies.length))
    
    const ball = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(replies[result])
    .setFooter('Hmm... Güzel İfşaymış Yakında Daha Fazla Eklenecek!')
    message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtuberifşa',
  description: 'Link',
  usage: 'YouTuberİfşa'
};
