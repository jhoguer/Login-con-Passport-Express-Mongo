const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

passport.use('local-signup', LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {

}))