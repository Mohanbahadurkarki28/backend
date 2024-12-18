require('module-alias/register')
const express = require('express')
const mongoose=require('mongoose')
const routes=require('./routes')
const {config} = require('dotenv')
const {env} = require("@/lib/function");
config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(routes)


app.use((error, req, res, next) => {
    res.status(error.status || 400).send({
        message:error.message || 'problem while processing request.',
        validation:error.validation,
    })
})

app.listen(env('API_PORT'), async () => {
    console.log(`Server is started at http://localhost:${env('API_PORT')}`)
    console.log('press Ctrl+C to stop.....')

    await mongoose.connect(env('MONGO_URL') )
    console.log('MongoDB connected...')
})

//JSON.stringify()
/* 
Types of Middleware
1) -Application  -- Hamile lekhne code lai application middleware vaninxa
2) -Router  -- Hamile routing garda use hune lai routing middleware vaninxa
3) -Built-In/First part  -- Exprrss ko library maa use garne lai build-In/First party middleware vaninxa
4) -Third party --Express ko bayek aru third party bata ayeko package lai third party middleware vaninxa
5) -Error-handling  -- Error response kasari handle garinxa teslai error handeling vaninxa
*/

//JSON (Javascript Object Notation)