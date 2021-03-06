const getFormFields = require('../../../lib/get-form-fields.js') 
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) { 
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data) 
    .then(ui.signUpSuccess) 
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signIn(data) 
    .then(ui.signInSuccess) 
    .catch(ui.signInFailure)
}

const onSignOut = event => {
    event.preventDefault()
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.signOutFailure)
  }

const onChangePassword = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data)
        .then(ui.changePasswordSuccess)
        .catch(ui.changePasswordFailure)
    $(event.target).trigger('reset')
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword
}