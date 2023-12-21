import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/api/todos', (req, res) => {
  res.json({
    todos: [
      {
        index: new Date().getTime(),
        content: 'Buy milk',
        done: false
      }
    ]
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
