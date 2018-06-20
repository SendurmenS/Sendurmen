const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x:', '`yayıncı-İfsa` Adlı Komutu Özel Mesajlarda Kullanamazsın !!!')
  return message.author.sendEmbed(ozelmesajuyari).then(msg => {msg.delete(3500)})};

    let replies = ["https://cdn.discordapp.com/attachments/450359960203690024/459097501262151680/adadasd.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097516168839188/sd.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097507620978690/hqdefault.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097518165327884/asdasdasdasdasd.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097512549154816/maxresdefault.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097515955060747/adsasd.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097523974569984/asdasd.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097525291450393/0.jpg", "https://cdn.discordapp.com/attachments/450359960203690024/459097535219236875/asdadas.jpg"];
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
  name: 'Yayıncıİfşa',
  description: 'Link',
  usage: 'Yayıncıİfşa'
};
