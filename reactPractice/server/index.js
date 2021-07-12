import express from 'express'
// import cors from 'cors'
import Mongoose from 'mongoose'
import articleRoute from './routes/blogRoute.js'

const app = express()
const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
   res.send('Hello my friend')
})

app.use('/', articleRoute)
// enablet controller to access paras from any info of form.
// able to use res.data.{title, markdown ...}
app.use(express.urlencoded({extended:false}))

// Listening the port and log on server side
// app.listen(PORT, () => { console.log('you are in ', PORT) })

const CONNECTION_URL = "mongodb+srv://user-baihan:123741@cluster0.6hjpf.mongodb.net/Blog"

Mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => app.listen(PORT, ()=> console.log(`Server running on ${PORT}`)))
      .catch(err => console.log(err))
      

const dbConnection = Mongoose.connection
dbConnection.on('error', err=> console.log(err))
dbConnection.once('open', () => console.log('Connection Successed.'))

Mongoose.set('useFindAndModify', false)
