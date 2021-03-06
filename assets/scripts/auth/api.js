const config = require ('../config.js')
const store = require('../store.js')

const signUp = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data 
    })
}

const signIn = function (data) {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data 
    })
}

const signOut = data => {
    return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

  const changePassword = function (data) {
    // console.log('data is ', data)
    return $.ajax({
      url: config.apiUrl + '/change-password',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
      // data: data
    })
  }

module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword
}