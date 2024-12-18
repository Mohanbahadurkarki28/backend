const {Router} = require('express')
const {cms} = require("@/controllers");

const router = Router()

router.route('/')
    .get(cms.staffsCtrl.index)
    .post(cms.staffsCtrl.store)

router.route('/:id')
    .get(cms.staffsCtrl.show)
    .put(cms.staffsCtrl.Update)
    .patch(cms.staffsCtrl.Update)
    .delete(cms.staffsCtrl.destroy)



module.exports = router