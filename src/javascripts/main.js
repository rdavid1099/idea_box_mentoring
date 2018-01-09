const $ = require('jquery')

$(document).ready(() => {
  let scope = {
    username: 'Guest',
    idea_num: 0,
    loggedIn: false
  }

  function getNav() {
    return '<nav class="navbar navbar-default">' +
      '<div class="container-fluid">' +
        '<div class="navbar-header"><span class="navbar-brand">IdeaBox</span></div>' +
        '<ul class="nav navbar-nav navbar-right">' +
          `<li><a href="#" id="login">${scope.loggedIn ? `Logout, ${scope.username}` : 'Login'}` +
        '</ul>' +
      '</div>' +
    '</nav>'
  }

  function getHeadline() { return `<h2>Welcome to IdeaBox, ${scope.username}</h2>`}

  $('#nav').html(getNav())
  $('#headline').html(getHeadline())
  $('#login').on('click', () => {
    console.log(scope.loggedIn)
    scope.loggedIn = !scope.loggedIn
    $('#nav').html(getNav())
  })
})
