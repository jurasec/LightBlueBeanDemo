var FB = require('fb');
//FB.setAccessToken('CAACEdEose0cBAKFUX66hwFVEWvmcAtLMazLwc1DXoBZAhgSYrP42WBG1Fuic22tc9gNPvhj7LvhvDZCQ1V0BODuebotO0D8tGV8UoE12rz6ZBwDIgnNEdM7svYhoWcaPpkQSGomkHAMdpRNRpKbueddYEpjTwCpZAQDIVnmccBxUx82vfZA8ZAZCUnybMrhhnXoFltsFl9UJgZDZD');
FB.setAccessToken('CAAWMmSSEvLMBAO1Hzyt9QMdpbj2Q1uVrxNgzCGyW8QQXglgvCut5PWLeqVNZBLZABwpRrKfVGWXMKOQFZCYuj09woLGXpNaLp3iXmLRDkyyCSyszC0hQYz1nZC2JZAEyNWe8bRgYtTCwqsa9MislThA12LnE8Qeisn1b9CW6m1kfqfXZC4cZB00JqX8ZABdKUaBScPJeN6sUDAZDZD');
var body = 'testing post ...';
FB.api('me/feed', 'post', { message: body}, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});


/* Credentials */
/*

Access Token
https://developers.facebook.com/tools/explorer/1561964254117043

https://www.facebook.com/profile.php?id=100011428634879
lightbluebean01

*/