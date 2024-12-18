const {Router} = require('express')
const customerRoutes = require('./customer.routes')
const {customer} = require("@/lib/middlewares");


const router = Router()

router.use('/customer',customer, customerRoutes)

module.exports = router