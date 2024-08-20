const connectDb=require('./db/connect')
require('dotenv').config()
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const start=async ()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(5000,()=>{
            console.log("Server is listening to port 5000")
        })
        
    }
    catch(error){
        console.log(error)
    }
}

start()