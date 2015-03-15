var irc = require('irc');
var fs = require('fs');

conf = JSON.parse(fs.readFileSync('./config.json'));



var client = new irc.Client(conf['host'], 'besos', {
      userName: conf['username'],
      password: conf['password'],
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

