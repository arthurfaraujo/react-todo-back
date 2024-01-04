import { Router } from 'express'
import Todo from '../models/Todo'
import { AuthenticatedRequest } from '../interfaces/interfaces'
import { auth } from '../middlewares/auth'

const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.getAll()

  res.json({ todos })
})

router.post('/', auth, async (req: AuthenticatedRequest, res) => {
  const todo = req.body

  console.log(req.userId)

  const newTodo = await Todo.create({ ...todo, userId: req.userId })

  res.json({ created: true, todo: newTodo })
})

export default router
