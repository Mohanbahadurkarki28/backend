const {errorMsg, validationError} = require("@/lib/function");
const {User} = require("@/models");
const bcrypt = require("bcryptjs");

class ProfileController{
    details = async (req, res, next)=>{
        try{
            res.send(req.user)
        } catch(error){
            errorMsg(next, error)
        }
    }
    Update = async (req, res, next)=>{
        try{
            const {name, phone, address} = req.body

            await User.findByIdAndUpdate(
                req.user._id,
                {name, phone, address},
                {runValidators: true},
            )
            res.send({
                message: 'Profile updated.',
            })
        }catch(error){
            errorMsg(next, error)
        }
    }
    password = async(req, res, next) => {
        try{
            const {oldPassword, newPassword, ConfirmPassword } = req.body

            const user = await User.findById(req.user._id).select('+password')

            if(bcrypt.compareSync(password, user.password)){
                if(password == confirmPassword) {
                    const hashed = bcrypt.hashSync(password)

                    await User.findByIdAndUpdate(user._id,{password:hashed, phone, address},{runValidators:true})

                    res.send({
                        message: ' password updated'
                    })

                }else{
                    validationError(next,{
                        password: "password is not confirmed.",
                    })
                }

            } else {
                validationError(next, {
                    password: "The old password is incorrect.",
                })
            }

        } catch(error){
            errorMsg(next, error)
        }
    }
}

module.exports = new ProfileController