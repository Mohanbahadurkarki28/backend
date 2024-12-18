const validationError = (next, validation) =>{
    next({
        message: "There was some data validation error.",
        status: 422,
        validation,
    })
}
const errorMsg = (next, error) => {
    console.log(error)

    if('errors' in error){
        let validation = {}

        for(let k in error.errors){
            validation = {
                ...validation,
                [k]: error.errors[k].message,
            }
        }
        validationError(next, validation)
    } else if('code' in error && error.code == 11000){
        validationError(next, {
            email: 'The given email is already taken.',
        })

    } else {
        next({
            message: 'problem while processing request.',
        })
    }
}

const env = key => process.env[key]

const notFoundError =(next, name) =>{
    next({
        message: `${name} not found`,
        status: 404,
    })
}
module.exports = {validationError, errorMsg, env, notFoundError}