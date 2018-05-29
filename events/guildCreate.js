const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuzun özelliklerini öğrenmek için s!yardım  yada s!y komudunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  's!uyarı komutunu kullanın.',
  '',
  `SendurmenS resmi sunucusu : https://discord.gg/ZBXeHgD`,
  `**Sendurmen sunucusu** https://discord.gg/ZBXeHgD`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + ':revolving_hearts: Yakında Daha İyi Ve Kaliteli :tada:  | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
