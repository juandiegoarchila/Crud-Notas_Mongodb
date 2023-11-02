const passport = require('passport');
const LocalStrategy = require ('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) =>{
    
    //metch email user
    const user = await User.findOne({email})
    if (!user) {
        return done(null, false, { message: 'no se encuentra usuario '});
    } else{
        //math password user
        const match = await user.matchPassword(password)
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'contraseña incorecta'});
        }
    }
}));

passport.serializeUser((user, done ) =>{
    done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
