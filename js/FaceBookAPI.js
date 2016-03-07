var FB = require('fb');
FB.setAccessToken('CAACEdEose0cBAKFUX66hwFVEWvmcAtLMazLwc1DXoBZAhgSYrP42WBG1Fuic22tc9gNPvhj7LvhvDZCQ1V0BODuebotO0D8tGV8UoE12rz6ZBwDIgnNEdM7svYhoWcaPpkQSGomkHAMdpRNRpKbueddYEpjTwCpZAQDIVnmccBxUx82vfZA8ZAZCUnybMrhhnXoFltsFl9UJgZDZD');

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

https://www.facebook.com/profile.php?id=100011428634879
lightbluebean01

*/