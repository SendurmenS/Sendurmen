const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**__SendurmenS__**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları İçin**", `**➽** s!**eglencekomutları** ***(s!ek)*** `)
  .addField("**Yetkili Komutları İçin**", `**➽** s!**yetkilikomutları** ***(s!yk)*** `)
  .addField("**Botun Komutları İçin**", `**➽** s!**botkomutları** ***(s!bk)*** `)
  .addField("**Ana Komutları İçin**", `**➽** s!**anakomutlar** ***(s!ak)*** `)
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
  aliases: ['h', 'bot', 'sendurmen', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
