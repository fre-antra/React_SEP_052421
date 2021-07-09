import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes/subscriber.js'


const app = express()
const port = 5000

const URL = "mongodb+srv://user-baihan:123741@cluster0.6hjpf.mongodb.net/subsProj"

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology:true})

const db = mongoose.connection

db.on('err', (err)=>console.log(err))
db.once('open', ()=>console.log('Connected'))

app.use(express.json())

const subscribersRouter = router
app.use('/subscribers', subscribersRouter )

app.listen(port, ()=>{ console.log('Server Start')})