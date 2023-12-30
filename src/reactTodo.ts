import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import userRouter from './routes/user'

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
