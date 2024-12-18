const {Router} = require('express')
const {Profile} = require("@/controllers");


const router = Router()

router.get('/details', Profile.ProfileCtrl.details)

router.route('/update')
    .put(Profile.ProfileCtrl.Update)
    .patch(Profile.ProfileCtrl.Update)

router.route('/password')
    .put(Profile.ProfileCtrl.password)
    .patch(Profile.ProfileCtrl.password)

module.exports = router