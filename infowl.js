'use strict';
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('Zalogowano bota do bazy danych [BOT.JS]');
});
client.on('message', message => {
  if (message.content === '%wlinfo') {

    const embed = new MessageEmbed()
      .setTitle(':boom: **PRIMERP**')
      .setColor('#F1B10A')
      .setDescription('@everyone ! Nasz system whitelist działa nieco inaczej niż inne! Aby dostać się na whitelistę musisz wejść na https://aplikacja.primerp.pl Przeczytaj i wejdź na kanał: #aplikuję zostaniesz przepytany z pojęć rp i z regulaminu serwera! Uwaga ❗ Aby zagrać na naszym serwerze musisz mieć odpalony discord podczas wchodzenia na FiveM ponieważ nasz system podczas dołączania na serwer wykrywa discorda i sprawda czy posiadasz rangę @Whitelisted bez tego nie wejdziesz ❗ ');

    message.channel.send(embed);
  }
});

client.login('Njg3OTkzNTg4MzU2NzQzMTk3.XmvQvg.UXrusnyOyyxkPwgshIKtxUQ-d_U');