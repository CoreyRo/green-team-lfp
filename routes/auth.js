var authController = require('../controllers/authController.js');
var db = require("../models");

module.exports = function(app, passport) {

    app.get('/sign-up', authController.signup);
    app.get('/sign-in', authController.signin);
    app.get('/logout', authController.logout)
    
 
    app.post('/sign-up', passport.authenticate('local-signup', {
         successRedirect: '/edit-profile',
         failureRedirect: '/sign-in',
         failureFlash:true
     }));
 

     app.post('/sign-in', passport.authenticate('local-signin', {
         successRedirect: '/edit-profile',
         failureRedirect: '/sign-in',
         failureFlash:true
     }));
 
     // Route once you login
     app.get("/edit-profile", isLoggedIn, function(req, res) {
       db.User.findOne({
         where: {
         id: req.user.id 
       },
       include: [
         db.Product
       ]
       }).then(function(dbUser) {
           res.render('user', { user: dbUser, layout: 'profile.handlebars' });
       });
     });

    app.get('/logout', authController.logout);
     
    function isLoggedIn(req, res, next) {
        console.log('redirect',req.isAuthenticated())
        if (req.isAuthenticated())
        
            return next();
            
        res.redirect('/sign-in');
            
    }
}
 