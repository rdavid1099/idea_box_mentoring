const $ = require('jquery')

$(document).ready(() => {
  const $nav      = $('#nav'),
        $headline = $('#headline'),
        $ideaForm = $('#idea-form'),
        $ideaList = $('#idea-list')

  let scope = {
    username: 'Ryan',
    loggedIn: true,
    ideas: [{title: 'Testing1', description: 'Testing ideas'}]
  }

  const getNav = () => {
    return '<nav class="navbar navbar-default">' +
      '<div class="container-fluid">' +
        '<div class="navbar-header"><span class="navbar-brand">IdeaBox</span></div>' +
        '<ul class="nav navbar-nav navbar-right">' +
          `<li><a href="#" id="login">${scope.loggedIn ? `Logout, ${scope.username}` : 'Login'}</a>` +
        '</ul>' +
      '</div>' +
    '</nav>'
  }

  const getHeadline = () => { return `<h2 style="text-align: center;">Welcome to IdeaBox, ${scope.username}</h2>`}

  const getIdeaForm = () => {
    return '<div class="row">' +
        '<div class="col-md-3"></div>' +
        `<div class="col-md-6 well">${scope.loggedIn ? ideaForm : authorizeNeeded}</div>` +
        '<div class="col-md-3"></div>' +
      '</div>'
  }

  const editForm = (id) => {
    let $idea = $(`#${id}`)
    $idea.html(getEditHtml($idea[0], id))
  }

  const getEditHtml = ($idea, id) => {
    let ideaID = id.split("-")[1]
    return '<form>' +
      '<div class="form-group">' +
        '<label for="idea-title">Title</label>' +
        `<input type="text" class="form-control" id="idea-title-${ideaID}" placeholder="Title" value="${$idea.children[0].innerText}">` +
      '</div>' +
      '<div class="form-group">' +
        '<label for="idea-descrip">Description</label>' +
        `<textarea rows="4" class="form-control" id="idea-descrip-${ideaID}" placeholder="Description">${$idea.children[1].innerText}</textarea>` +
      '</div>' +
      '<center><div class="btn-group" role="group">' +
        `<a href="#" type="button" class="btn btn-primary update-idea" id="${ideaID}">Edit</a>` +
        '<a href="#" type="button" class="btn btn-danger" id="clear-idea">Cancel</a>' +
      '</div></center>' +
    '</form>'
  }

  const getList = () => {
    return '<div class="row">' +
      '<div class="col-md-2"></div>' +
      '<div class="col-md-8">' +
        `<h5 style="text-align: center;">Total Ideas in List: ${scope.ideas.length}</h5>` +
        getIdeasHtml() +
      '</div>' +
      '<div class="col-md-2"></div>' +
    '</div>'
  }

  const getIdeasHtml = () => {
    if (scope.ideas.length === 0) { return '' }
    let result  = '',
        buttons = '<div class="panel-footer" style="text-align: center;">' +
                    '<div class="btn-group" role="group">' +
                      '<a href="#" type="button" class="btn btn-primary edit">Edit</a>' +
                      '<a href="#" type="button" class="btn btn-danger delete">Delete</a>' +
                    '</div>' +
                  '</div>',
        ideas = scope.ideas.slice().reverse()

    for (var i = 0; i < ideas.length; i++) {
      result += `<div class="panel panel-primary" id="idea-${i}">` +
        `<div class="panel-heading"><h3 class="panel-title">${ideas[i].title}</h3></div>` +
        `<div class="panel-body">${ideas[i].description}</div>` +
        `${scope.loggedIn ? buttons : ''}` +
      '</div>'
    }
    return result
  }

  const createIdea = (cb) => {
    let title   = $('#idea-title')[0].value,
        descrip = $('#idea-descrip')[0].value
    if (title && descrip) {
      let newIdea = {title: title,
                     description: descrip}
      scope.ideas.push(newIdea)
    }
    cb()
  }

  const updateIdea = (id, cb) => {
    scope.ideas[id].title = $(`#idea-title-${id}`)[0].value,
    scope.ideas[id].description = $(`#idea-descrip-${id}`)[0].value
    cb()
  }

  const refreshDom = () => {
    $nav.html(getNav())
    $headline.html(getHeadline())
    $ideaForm.html(getIdeaForm())
    $ideaList.html(getList())
  }

  const setUsername = (cb) => {
    let username = $('#username')[0].value
    if (username) {
      scope.loggedIn = true
      scope.username = username
    }
    cb()
  }

  const logout = (cb) => {
    scope.loggedIn = false
    scope.username = 'Guest'
    cb()
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
        ideaForm = '<form>' +
                    '<div class="form-group">' +
                      '<label for="idea-title">Title</label>' +
                      '<input type="text" class="form-control" id="idea-title" placeholder="Title">' +
                    '</div>' +
                    '<div class="form-group">' +
                      '<label for="idea-descrip">Description</label>' +
                      '<textarea rows="4" class="form-control" id="idea-descrip" placeholder="Description"></textarea>' +
                    '</div>' +
                    '<center><div class="btn-group" role="group">' +
                      '<a href="#" type="button" class="btn btn-primary" id="save-idea">Save</a>' +
                      '<a href="#" type="button" class="btn btn-danger" id="clear-idea">Clear</a>' +
                    '</div></center>' +
                  '</form>',
        authorizeNeeded = '<h5 style="text-align: center;">You must login to create ideas</h5>'

  refreshDom()

  $(document).on('click', '#login', (e) => {
    scope.loggedIn ? logout(refreshDom) : $ideaForm.html(loginForm)
  })

  $(document).on('click', '.edit', (e) => {
    let ideaID = e.target.offsetParent.parentElement.parentElement.id;
    editForm(ideaID)
  })

  $(document).on('click', '.update-idea', (e) => {
    updateIdea(e.target.id, refreshDom)
  })

  $(document).on('click', '.delete', (e) => {
    console.log("DELETE")
    console.log(e)
  })

  $(document).on('click', '#save-idea', (e) => { createIdea(refreshDom) })

  $(document).on('click', '#clear-idea', (e) => { refreshDom() })

  $(document).on('click', '#authorize', (e) => { setUsername(refreshDom) })

  $(document).on('click', '#cancel-login', (e) => { $ideaForm.html(getIdeaForm()) })
})
