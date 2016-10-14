var getRepos = require('./../js/Repolist.js').getRepos;
var getUser = require('./../js/Repolist.js').getUser;


function listRepositories(repos) {
  $('.submit-results').empty();
  $('.submit-results').append('<h4 id="username-header">'+repos[0].owner.login+' repositories: </h4><hr>'+'<ol id="repositories"></ol>');
  for (var i = 0; i < repos.length; i++) {
    $('#repositories').append('<li class="repository" data-repo="'+i+'"><span class="repo-name">'+repos[i].name+':</span></li>');
  }
}



function ifNull(string) {
  if(string === null) {
    return "";
  } else {
    return string;
  }
}
$(document).ready(function() {
  $('#user-submit').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getRepos(username, listRepositories, userNameNotFound);
  });

  $('.submit-results').on('click', 'li.repository', function() {
    $('.repository ul').empty();
    var repoId = $(this).attr("data-repo");
    var user = getUser();

    $(this).append(
      '<ul>'+
        '<li>Repository clone URL: '+user[repoId].clone_URL+'</li>'+
        '<li>Created at: '+user[repoId].created_at+'</li>'+
        '<li> Description: '+ifNull(user[repoId].description)+'</li>'+
      '</ul>'
    );
  });
});

function userNameNotFound() {
  $('.submit-results').append('<div class="error-message"><h3>Oops! Looks like this user doesn\'t exist.</h3><h6>Here are some other things that don\'t exist</h6><img id="error-image" src="/./../img/usernamenotfound.jpeg"></div>')
}
