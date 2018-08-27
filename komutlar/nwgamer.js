const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**__SendurmenS__**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**NWGamer Owners**", `**➽** ***_ @Hemply_#3296 @LetsR3kt#9232  @Eldrithc_#1698 _***`)
  .addField("**NWGamer Admins**", `**➽** ***_ @iSendurmen#1345 @LZyrias#8109 _*** `)
  .addField("", ``)
  .addField("**NWGAMER İP**", `**➽** ***_ NWGamer.Batihost.Com_ *** `)
  .addField("**NWGAMER MOTD **", `**➽** ***_ YAKİNDA _*** `)
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
  aliases: ['nw', 'nwg', 'server', 'sw'],
  permLevel: 0
};

exports.help = {
  name: 'nwgamer',
  description: 'Sunucumuzu Gösterir',
  usage: 'nwgamer'
};
