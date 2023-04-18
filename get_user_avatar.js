// Importer la bibliothèque Discord.js
const Discord = require('discord.js');
const { token } = require('./config.json');

// Créer un nouveau client Discord
const client = new Discord.Client();

// Lorsque le bot est prêt
client.on('ready', () => {
  console.log('Le bot est prêt !');
});

// Lorsqu'un utilisateur rejoint le serveur
client.on('guildMemberAdd', member => {
  // Récupérer l'URL de l'image de profil de l'utilisateur
  const userAvatarURL = member.user.displayAvatarURL();

  // Afficher l'URL de l'image de profil dans la console
  console.log(`L'utilisateur ${member.displayName} a pour image de profil : ${userAvatarURL}`);
});

// Se connecter au serveur Discord
client.login({token});
