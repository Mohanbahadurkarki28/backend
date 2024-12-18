const {errorMsg, validationError, notFoundError} = require("@/lib/function");
const {User} = require("@/models");
const bcrypt = require("bcryptjs");

class customerController{
    index = async(req, res, next) => {
        try{
            const customer = await User.find({role:'customer'})
            res.send(customer)

        }catch(error){
            errorMsg(next, error)
        }
    }
    store = async (req, res, next) =>{
        try{
            const{name, email, password, confirmPassword, phone, address, status} = req.body

            if(password == confirmPassword) {
                const hashed = bcrypt.hashSync(password)

                await User.create({name, email, password:hashed, phone, address, status, role: 'customer'})

                res.status(201).send({
                    message: 'customer added'
                })

            }else{
                validationError(next,{
                    password: "password is not confirmed.",

                })
            }

        }catch(error){
            errorMsg(next, error)
        }
    }
    show = async (req,res,next) =>{
        try{
            const {id} = req.params
            const customer = await User.findById(id)
            if(customer && customer.role == 'customer'){
                res.send(customer)
            }else{
                notFoundError(next, 'customer')
            }
        }catch(error){
            errorMsg(next, error)
        }
    }

    Update = async (req, res, next)=> {
        try {
            const {id} = req.params
            const customer = await User.findById(id)
            if (customer && customer.role == 'customer') {
                const {name, phone, address, status} = req.body

                await User.findByIdAndUpdate(
                    id,
                    {name, phone, address, status},
                    {runValidators: true},
                )
                res.send({
                    message: 'customer updated.',
                })
            } else {
                notFoundError(next, 'customer')
            }
        } catch (error) {
            errorMsg(next, error)
        }
    }
    destroy = async (req,res,next) =>{
        try{
            const{id}= req.params

            const customer = await User.findById(id)

            if(customer && customer.role == 'customer') {
                await User.findByIdAndDelete(id)

                res.send({
                    message: 'customer deleted.',
                })
            }else{
                notFoundError(next, 'customer')
            }
        }catch(error){
            errorMsg(next, error)
        }
    }

}

module.exports = new customerController