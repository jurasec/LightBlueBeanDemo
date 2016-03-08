/*

Credential 

Owner ID: 705617986745344000
Consumer key: xGHSyWxEWrfEvGdSSMKvSrH6w
Consumer secret: dH7BaTKIq3M60x26G2L2f6eP2yyzezGuqhWzr9rCO9YSriRtLG
Access token: 705617986745344000-vl7Lis7r5dbtSAfibnX8CCDsVihehNu
Access token secret: BCgHiAFE7AxVV0qsI6JCBB9STp8mlGK8NERe6St4Hk6nZ

*/


var twitterAPI = require('node-twitter-api');
var TelegramBot = require('./TelegramBot.js')

var key = 'xGHSyWxEWrfEvGdSSMKvSrH6w';
var  secret = 'dH7BaTKIq3M60x26G2L2f6eP2yyzezGuqhWzr9rCO9YSriRtLG';
var accessToken = '705617986745344000-vl7Lis7r5dbtSAfibnX8CCDsVihehNu';
var accessTokenSecret = 'BCgHiAFE7AxVV0qsI6JCBB9STp8mlGK8NERe6St4Hk6nZ';
var params = {screen_name: 'nodejs'};


var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: key,
  consumer_secret: secret,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});
 
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

client.stream('statuses/filter', {track: 'LBBDemo'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    TelegramBot.sendMessageBroadcast();
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});


/*
var twitter = new twitterAPI({
	consumerKey: 'xGHSyWxEWrfEvGdSSMKvSrH6w',
	consumerSecret: 'dH7BaTKIq3M60x26G2L2f6eP2yyzezGuqhWzr9rCO9YSriRtLG',
	callback: 'http://127.0.0.1/callback'
});



twitter.verifyCredentials(accessToken, accessTokenSecret, params, function(error, data, response) {
	if (error) {
		//something was wrong with either accessToken or accessTokenSecret 
		//start over with Step 1 
	} else {
		//accessToken and accessTokenSecret can now be used to make api-calls (not yet implemented) 
		//data contains the user-data described in the official Twitter-API-docs 
		//you could e.g. display his screen_name 
		console.log(data["screen_name"]);
	}
});


twitter.statuses("update", {
		status: "Hello world!"
	},
	accessToken,
	accessTokenSecret,
	function(error, data, response) {
		if (error) {
			// something went wrong 
		} else {
			// data contains the data sent by twitter 
		}
	}
);*/