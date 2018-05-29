const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `s!banned = Dene ve Gör! \ns!avatarım = Avatarınınızı Gösterir. \ns!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ns!sunucuresmi = BOT Sunucunun Resmini Atar. \ns!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ns!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `s!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ns!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ns!unban = İstediğiniz Kişinin Yasağını Açar. \ns!sustur = İstediğiniz Kişiyi Susturur. \ns!oylama = Oylama Açar. \ns!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "s!yardım = BOT Komutlarını Atar. \ns!bilgi = BOT Kendisi Hakkında Bilgi Verir. \ns!ping = BOT Gecikme Süresini Söyler. \ns!davet = BOT Davet Linkini Atar. \ns!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı İletişim**", " **Discord Sendurmen/WarFX. | ɖɛֆɨɢռɛʀ |#1345 . \nSteam steamcommunity.com/id/Sendurmen/. \nwww.youtube.com/c/BFYTMrSendurmen. \nSkype : xSendurmenSYT100. ** ")
  .setFooter('**SendurmenS Bot Corp 2018-2019**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
