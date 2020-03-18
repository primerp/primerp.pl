'use strict';
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('Zalogowano bota do bazy danych [BOT.JS]');
});
client.on('message', message => {
  if (message.content === '%skargifr') {

    const embed = new MessageEmbed()
      .setTitle(':boom: **PRIMERP**')
      .setColor('#F1B10A')
      .setDescription('@everyone ! Imię nazwisko pracownika , Frakcja (LSPD, EMS, LSCS) , Treść skargi ');

    message.channel.send(embed);
  }
});

client.login('Njg3OTkzNTg4MzU2NzQzMTk3.XmvQvg.UXrusnyOyyxkPwgshIKtxUQ-d_U');