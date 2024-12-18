const {Router} = require('express')
const authRoutes = require('./auth.routes')
const profileRoutes = require('./profile.routes')
const cmsRoutes = require('./cms')
const {auth, cmsUser} = require("@/lib/middlewares");
const {notFoundError} = require("@/lib/function");

const router = Router()

router.use('/auth', authRoutes)

router.use('/profile', auth, profileRoutes)

router.use('/cms', auth, cmsUser, cmsRoutes)


router.use((req, res, next) =>{
   notFoundError(next, 'URL')
})

module.exports = router