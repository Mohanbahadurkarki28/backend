const bcrypt = require('bcryptjs')
const {User} = require("@/models");
const {errorMsg,validationError} = require("@/lib/function");
class RegisterController{
    register = async (req, res, next) => {
        try{
            const{name, email, password, confirmPassword, phone, address} = req.body

            if(password == confirmPassword) {
                const hashed = bcrypt.hashSync(password)

                await User.create({name, email, password:hashed, phone, address})

                res.status(201).send({
                    message: 'Thank you for registering'
                })

            }else{
              validationError(next,{
                    password: "password is not confirmed.",

                })
            }
        } catch(error){
            errorMsg(next, error)
        }
    }
}

module.exports = new RegisterController
