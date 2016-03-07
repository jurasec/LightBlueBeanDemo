var TelegramBot = require('node-telegram-bot-api');

/* @JuraTronixBot */

var token = '212028665:AAFFhc88_MCxCS20QEnw8vKJ-BQqZpijvE4';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = match[1];
  bot.sendMessage(fromId, "que onda!, aqui te va un lindo bot");
});

bot.onText(/\/cmd (.+)/, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = match[1];
  bot.sendMessage(fromId, "cmd test..");



});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  console.log('msg  => ', msg);
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'images/bot.png';
  //bot.sendPhoto(chatId, photo, {caption: 'Lovely bot'});
});

// Matches /love
bot.onText(/\/love/, function (msg) {
  var chatId = msg.chat.id;
  var opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [
          ['Yes, you are the bot of my life ❤'],
          ['No, sorry there is another one...']]
      })
    };
    bot.sendMessage(chatId, 'Do you love me?', opts);
});

/*bot.getMe().then( function( user ){
	console.log( user);
});*/
