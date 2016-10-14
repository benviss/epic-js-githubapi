var getRepos = require('./../js/Repolist.js').getRepos;

$(document).ready(function() {


  $('#user-submit').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getRepos(username);

  });
});
