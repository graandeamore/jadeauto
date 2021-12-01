require('dotenv').config()                              //import .env
const express = require('express')                      //import express
const models = require('./models/models')               //import database models
const sequelize = require('./db')                       //import DataBase config
const fileUpload = require('express-fileupload')        //import fileUpload
const cors = require('cors')                            //import for queries from browser
const router = require('./routes/index')                //import main router
const errorHandler = require('./middleware/ErrorHandlingMiddleware')    //import middleWare
const path = require('path')                            //import path for url

const PORT = process.env.PORT || 5000                   // port from .env and 5000 by default

const app = express()                                   //create object by call function express() (running our app)

app.use(cors())                                             //use  queries from browser
app.use(express.json())                                      //use parse json
app.use(express.static(path.resolve(__dirname,'static')))     //for usage files from static folder
app.use(fileUpload({}))                                //use file uploads with empty settings objet
app.use('/api', router)                                        //use main router

app.use(errorHandler)       //Strict usage in very end

const start = async () => {             //All queries to DataBase - async. Create DB query
    try {                                //try-catch for catching potential errors w/o app's crashing
        await sequelize.authenticate()    //DB connect
        await sequelize.sync()             //DB check Data schemes
        app.listen(PORT, () => console.log(`server started on port ${PORT}`) ) // start server and notification about
    } catch (e){
        console.log(e)
    }
}

start()
