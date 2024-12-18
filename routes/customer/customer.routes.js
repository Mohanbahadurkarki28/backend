const {Router} = require('express')
const {customer} = require("@/controllers");

const router = Router()

router.route('/')
    .get(customer.customerCtrl.index)
    .post(customer.customerCtrl.store)

router.route('/:id')
    .get(customer.customerCtrl.show)
    .put(customer.customerCtrl.Update)
    .patch(customer.customerCtrl.Update)
    .delete(customer.customerCtrl.destroy)



module.exports = router