var TelegramBot = require('node-telegram-bot-api');
var clientIds  = {};
/* @JuraTronixBot */

var token = '212028665:AAFFhc88_MCxCS20QEnw8vKJ-BQqZpijvE4';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/cmd turnOn$/, function (msg, match) {
  var fromId = msg.chat.id;
  bot.sendMessage(fromId, "The correct syntax is '/cmd turnOn [no. secons]s'");
});

bot.onText(/\/cmd ((?!turnOn).)*$/, function (msg, match) {
  var fromId = msg.chat.id;
  bot.sendMessage(fromId, "The correct syntax is '/cmd turnOn [no. secons]s'");
});

bot.onText(/\/cmd turnOn (\d)+s/, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = match[1];
  var seconds = parseInt(msg.text.substring( msg.text.length - 2 ));

  if( isNumber( seconds ) ){
    if( seconds > 5 ) seconds = 5;
  }else{
    bot.sendMessage(fromId, "The correct syntax is '/cmd turnOn [no. secons]s'");
  }
  console.log('fromId -> ', fromId);

  clientIds[ fromId.toString() ] = 0;

  for(var k in clientIds) {
    console.log('cliente -> ', k);
  }

  bot.sendMessage(fromId, "Turning on LED 1 for " +  msg.text.substring( msg.text.length - 2, msg.text.length - 1 ) + " seconds. ");
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  //console.log('msg  => ', msg);
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'images/bot.png';
  //bot.sendPhoto(chatId, photo, {caption: 'Lovely bot'});
});

// send message to all clients
exports.sendMessageBroadcast = function(){
  console.log('testing function');
  for(var k in clientIds) {
     bot.sendMessage( k, 'Broadcast Test');
  }  
} 

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

bot.getMe().then( function( user ){
	console.log( 'Bot ', user, ' on line');
});
