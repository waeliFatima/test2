var express = require('express');
var csrf = require('csurf');
var router = express.Router();
var passport = require('passport');


var csrfProtection= csrf();
router.use(csrfProtection);

router.get('/profile',isLoggedIn,function (req,res,next) {
    res.render('user/profile');

});
router.get('/logout',isLoggedIn,function (req,res,next) {
    req.logout();
    res.redirect('/');
});
router.use('/',notLoggIn,function (req , res ,next) {
   next();
});
router.get('/signup',function (req,res,next) {
    var messages = req.flash('error');
    res.render('user/signup',{csrfToken:req.csrfToken(),massages:messages, hasErrors:messages.length > 0 });

});
router.post('/signup',passport.authenticate('local.signup', {
    failureRedirect:'/user/signup',
    failureFlash: true
    // res.redirect('/')
}),function (req , res ,next) {
    if (req.session.oldURL) {
        var oldURL = req.session.oldURL;
        req.session.oldURL = null;
        res.redirect(oldURL);
    }
    else {
        res.redirect('/user/profile')
    }
});


router.get('/signin',function (req,res , next) {
    var messages = req.flash('error');
    res.render('user/signin',{csrfToken:req.csrfToken(),massages:messages, hasErrors:messages.length > 0 })
});

router.post('/signin',passport.authenticate('local.signin',{
    failureRedirect:'/user/signin',
    failureFlash: true
}),function (req , res , next) {
    if(req.session.oldURL){
        var oldURL = req.session.oldURL;
        req.session.oldURL = null;
        res.redirect(oldURL);
    }
    else{
        res.redirect('/user/profile')
    }
});

//


module.exports = router;

function isLoggedIn(req, res , next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}function notLoggIn(req, res , next) {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}