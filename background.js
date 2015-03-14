var irc = require('irc');
var fs = require('fs');

irc_host = 'fl.irc.slack.com';
irc_username = 'besos';
irc_password = 'password';

fs.readFile("sound64", function(error, data) {
  console.log(data);
  document.write('<audio id="player" src="'+ data + '" >');
  document.getElementById('player').play();
});

var client = new irc.Client(irc_host, 'besos', {
      userName: irc_username,
      password: irc_password,
      sasl: true,
      port: 6697,
      secure: true,
      debug: true,
      selfSigned: true,
      channels: ['#bot_testing'] });
console.log('init"d');
client.connect();
console.log("connected");
client.addListener('message', function(from, to, text) {
  client.say(to, "holy shit i heard something");
  console.log("gongin");
});

