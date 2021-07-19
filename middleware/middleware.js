export {
    passUserToView,
    isLoggedIn,
    path
}

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next()
//     res.redirect('/auth/google')
// }

let path = null;

function isLoggedIn(req, res, next) {
    path = req._parsedOriginalUrl.path
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }

function passUserToView(req, res, next) {
res.locals.user = req.user ? req.user : null
next()
}