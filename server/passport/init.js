var signIn = require('./signin');
var signUp = require('./signUp');

var users = require('../../db/controllers/users.js');

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    users.findUserById(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
  signIn(passport);
  signUp(passport);
};
