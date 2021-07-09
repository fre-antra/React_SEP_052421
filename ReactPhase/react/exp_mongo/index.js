import express from 'express'
import cors from 'cors'
const app = express()
const port = 5000




var corsOptions = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
}


app.use(cors(corsOptions))

// any changes need to restrat the server
// therefore, we can use nodemon(auto restrat the server)
app.get('/', (req, res) => {
  res.send('Hello young man nice nice!')
})

app.get('/todos', (req, res) => {
    res.send([{
        userId: 1,
        id: 1,
        title: "title 111",
        completed: false
      },
    {
        userId: 2,
        id: 1,
        title: "title 1221",
        completed: false
      },
    {
        userId: 3,
        id: 1,
        title: "title 113331",
        completed: false
      },
    {
        userId: 4,
        id: 1,
        title: "title 1544411",
        completed: false
      }])
})
  
app.get('/user', (req, res) => {
    res.send({
        id: 1,
        name: "Smith",
        DB: '1996/10/11'
    })
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})