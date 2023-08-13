const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let option = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),//Extract token from BearerToken.
    secretOrKey: 'Mark1300'
}

passport.use(new JWTStrategy(option, function (jwtPayload, done) { //Setting up new JWTStrategy.
    User.findById(jwtPayload._id).then(function (user) {

        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }).catch(function (error) {
        console.log('Error finding User from JWT !')
        return done(error);
    });
}))


module.exports = passport;