const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**__SendurmenS__**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("Güzel Bir Kafa Vurusu", `**➽** s!**headshot** `)
  .addField("Yayıncıifşası atar", `**➽** s!**yayıncıifşa** `)
  .addField("Youtuberifşası atar", `**➽** s!**youtuberifşa** `)
  .addField("Avatarınızı Gösterir", `**➽** s!**avatar** `)
  .addField("Eklenecek Komut", `**➽** s!**---** `)
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
  aliases: ['ek', 'eglencek', 'ekomutları', 'eglencekomutları'],
  permLevel: 0
};

exports.help = {
  name: 'eglencekomutları',
  description: 'eglencekomutlarını gosterir',
  usage: 'eglencekomutları'
};
