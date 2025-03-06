
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan'
import userRouter from './routes/user'
import todoRouter from './routes/todo'
import { notFound, errorHandler } from './middlewares/error'

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todo', todoRouter)

app.use('/api/user', userRouter)

app.use(notFound, errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
