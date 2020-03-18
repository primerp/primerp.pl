'use strict';
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('Zalogowano bota do bazy danych [BOT.JS]');
});
client.on('message', message => {
  if (message.content === '%wl') {

    const embed = new MessageEmbed()
      .setTitle('Whitelist')
      .setColor('#F1B10A')
      .setDescription('@everyone ! Zdaj wl`ke już dziś wejdz na https://aplikacja.primerp.pl/ przeczytaj i wróć do nas na kanał #aplikuję , Otwieram okienko na godzinę od teraz! ');

    message.channel.send(embed);
  }
});

client.login('Njg3OTkzNTg4MzU2NzQzMTk3.XmvQvg.UXrusnyOyyxkPwgshIKtxUQ-d_U');