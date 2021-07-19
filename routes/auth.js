import { Router } from 'express'
import passport from 'passport'

export {
  router
}

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

// router.get(
//   '/google/oauth2callback',
//   passport.authenticate('google', {
//     successRedirect: '/',
//     failureRedirect: '/auth/google',
//   })
// )

router.get(
  '/google/oauth2callback',
  passport.authenticate('google', { failureRedirect: '/auth/google'}), function (req, res){
    res.redirect(path || '/')
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

