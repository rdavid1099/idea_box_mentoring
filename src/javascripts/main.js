const $ = require('jquery')

$(document).ready(() => {
  const $nav      = $('#nav'),
        $headline = $('#headline'),
        $ideaForm = $('#idea-form'),
        $ideaList = $('#idea-list')

  let scope = {
    username: 'Guest',
    idea_num: 0,
    loggedIn: false,
    ideas: [{title: 'Testing1', description: 'Testing ideas'}]
  }

  getNav = () => {
    return '<nav class="navbar navbar-default">' +
      '<div class="container-fluid">' +
        '<div class="navbar-header"><span class="navbar-brand">IdeaBox</span></div>' +
        '<ul class="nav navbar-nav navbar-right">' +
          `<li><a href="#" id="login">${scope.loggedIn ? `Logout, ${scope.username}` : 'Login'}</a>` +
        '</ul>' +
      '</div>' +
    '</nav>'
  }

  getHeadline = () => { return `<h2 style="text-align: center;">Welcome to IdeaBox, ${scope.username}</h2>`}

  getIdeaForm = () => {
    return '<div class="row">' +
        '<div class="col-md-3"></div>' +
        `<div class="col-md-6 well">${scope.loggedIn ? ideaForm : authorizeNeeded}</div>` +
        '<div class="col-md-3"></div>' +
      '</div>'
  }

  getList = () => {
    return '<div class="row">' +
      '<div class="col-md-2"></div>' +
      '<div class="col-md-8">' +
        `<h5 style="text-align: center;">Total Ideas in List: ${scope.ideas.length}</h5>` +
        getIdeasHtml() +
      '</div>' +
      '<div class="col-md-2"></div>' +
    '</div>'
  }

  getIdeasHtml = () => {
    if (scope.ideas.length === 0) { return '' }
    let result  = '',
        buttons = '<div class="panel-footer">' +
                    '<div class="btn-group" role="group">' +
                      '<a href="#" type="button" class="btn btn-primary edit">Edit</a>' +
                      '<a href="#" type="button" class="btn btn-danger delete">Delete</a>' +
                    '</div>' +
                  '</div>'

    for (var i = 0; i < scope.ideas.length; i++) {
      result += '<div class="panel panel-primary">' +
        `<div class="panel-heading"><h3 class="panel-title">${scope.ideas[i].title}</h3></div>` +
        `<div class="panel-body">${scope.ideas[i].description}</div>` +
        `${scope.loggedIn ? buttons : ''}` +
      '</div>'
    }
    return result
  }

  const loginForm = '<div class="row">' +
                      '<div class="col-md-3"></div>' +
                      '<div class="col-md-6 well">' +
                        '<form>' +
                          '<div class="form-group">' +
                            '<label for="username">Username</label>' +
                            '<input type="text" class="form-control" id="username" placeholder="Username">' +
                          '</div>' +
                          '<center><div class="btn-group" role="group">' +
                            '<a href="#" type="button" class="btn btn-primary" id="authorize">Login</a>' +
                            '<a href="#" type="button" class="btn btn-danger" id="cancel-login">Cancel</a>' +
                          '</div></center>' +
                        '</form>' +
                      '</div>' +
                      '<div class="col-md-3"></div>' +
                    '</div>',
        ideaForm = '',
        authorizeNeeded = '<h5 style="text-align: center;">You must login to create ideas</h5>'

  $nav.html(getNav())
  $headline.html(getHeadline())
  $ideaForm.html(getIdeaForm())
  $ideaList.html(getList())

  $('#login').on('click', (e) => {
    $ideaForm.html(loginForm)
  })

  $(document).on('click', '#authorize', (e) => {

  })
})
