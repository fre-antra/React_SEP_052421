import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


import postsRoute from './routes/posts.js'


const app = express()
const PORT = process.env.PORT || 4000
// const corsOptions = {
//     origin: "http://localhost:3000",
//     optionSuccessStatus: 200,
// }


app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())
app.use(express.json())
// use middle ware to wrap whole file into path:/posts  === Linke routers to the /posts path
app.use('/posts', postsRoute)



const CONECTION_URL = "mongodb+srv://user-baihan:123741@cluster0.6hjpf.mongodb.net/postsProj"
// mongodb+srv://user-baihan:<password>@cluster0.6hjpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error)=> console.log(error.message))

// check out the connection is success
const db = mongoose.connection
db.on('error', (error)=>{console.log(error)})
db.once('open', ()=>{console.log('Connected to db!')})


mongoose.set('useFindAndModify', false)
