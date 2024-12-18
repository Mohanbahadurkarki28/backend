const jwt = require('jsonwebtoken')
const {env} = require("@/lib/function");
const {User} = require("@/models");
const auth = async(req, res, next) =>{

    try {
        if ('authorization' in req.headers) {
            const token = req.headers.authorization.split(' ').pop()
            const decoded = jwt.verify(token, env('JWT_SECRET'))

            const user = await User.findById(decoded.uid)
            if(user){
                    if(user.status){
                        req.user = user

                        next()
                }else{
                    next({
                        message:'User account deactivated.',
                        status: 403,
                    })
                }
            }else{
                next({
                    message: 'Bearer token is invalid.',
                    status: 401,
                })
            }

            res.send(decoded)
        } else {
            next({
                message: 'Bearer token missing.',
                status: 401,
            })
        }
    } catch (error){
        next({
            message:'Bearer token is invalid.',
            status:401,
        })
    }
}

const cmsUser = (req, res, next) =>{
    if(req.user.role != 'Customer'){
        next()
    }else {
        next({
            message: 'Access denied',
            status: 403,
        })
    }
}

const adminOnly = (req, res, next) =>{
    if(req.user.role == 'Admin'){
        next()
    }else {
        next({
            message: 'Access denied',
            status: 403,
        })
    }
}

const customer = (req, res, next) =>{
    if(req.user.role == 'Customer'){
        next()
    }else {
        next({
            message: 'Access denied',
            status: 403,
        })
    }
}

module.exports = {auth, cmsUser, adminOnly, customer}