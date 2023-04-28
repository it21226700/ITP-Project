require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')


const app = express();


//import routes
const empRoutes = require('./routes/employees');


//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
}) 

//routes
app.use('/api/employees',empRoutes)


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & Server started on port",process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



process.env