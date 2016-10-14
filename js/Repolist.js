var apiKey = require('./../.env').apiKey;
var user;

// var userNameNotFound = require('./../js/Repolist-interface.js').userNameNotFound;


exports.getRepos = function(username, listRepositories, userNameNotFound){
  $.get('https://api.github.com/users/'+username+'/repos?per_page=100&access_token=' + apiKey).then(function(response){
    user = response;
    console.log(response);
    listRepositories(response);
  }).fail(function(error){
    userNameNotFound();
    console.log("hmmm");
  });
};

exports.getUser = function() {
  return user;
}
