//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
   var User = user;

   var LocalStrategy = require('passport-local').Strategy;

   //serialize
   passport.serializeUser(function(user, done) {
        return done(null, user.id); 
   });
   
   // deserialize user 
   passport.deserializeUser(function(id, done) {
       console.log("deserial id: ", id)
       User.findById(id)
        .then(function(user) {
            console.log("deserializeUser user: ", user)
            if (user) {
                console.log("USER if ", user)
                return done(null, user);
            } 
            else { 
                console.log("user.errors: ",user.errors)
                return done(user.errors, null);
            }
        })
        .catch(err => console.log("DESERIALIZE ERROR: ", err))
   });


   passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },

       function(req, email, password, done) {
           console.log("This is the sign up", req.body);
           console.log("email", email);
           console.log("password", password);
           console.log("done", done);

           var generateHash = function(password) {
               return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
           };

           User.findOne({
               where: {
                   email: email
               }
           }).then((user) => {
               if (user) {
                    console.log("User Exists");
                    return done(null, false, req.flash('error', 'That email is already taken'));
               } 
               else {
                   var userPassword = generateHash(password);
                   var data = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: email,
                        username: req.body.username,
                        password: userPassword
                    };
                    console.log("DATA", data)
                    User.create(data)
                    .then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    })
                    .catch((err) => {
                        console.log("REGISTER CREATE ERROR:",err)
                        return res.json(err)
                    })
               }
           })
           .catch(err => console.log("REGISTER ERROR: ", err))
       }
   ));

   //Local Strategy for comparing with existing user...
   //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
       function(req, email, password, done) {
           var User = user;
           var isValidPassword = function(userpass, password) {
               return bCrypt.compareSync(password, userpass);
           }
    
           User.findOne({
               where: {
                   email: email
               }
           }).then(function(user) {

               if (!user) {
    
                   return done(null, false, req.flash('error', 'Email does not exist'));
               }
               if (!isValidPassword(user.password, password)) {

                   return done(null, false, req.flash('error', 'Incorrect Password'));
               }
               var userinfo = user.get();
               return done(null, userinfo);
    
           }).catch(function(err) {
               console.log("Error:", err);
               return done(null, false, req.flash('error', 'Something went wrong with your sign in'));   
           });
       } 
   ));   

}