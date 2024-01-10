import { Router } from 'express'
import Todo from '../models/Todo'
import { AuthenticatedRequest } from '../interfaces/interfaces'
import { auth } from '../middlewares/auth'

const router = Router()

router.get('/', auth, async (req: AuthenticatedRequest, res) => {
  const todos = await Todo.getAllByUser(req.userId as string)

  res.json({ todos })
})

router.post('/', auth, async (req: AuthenticatedRequest, res) => {
  const todo = req.body

  const newTodo = await Todo.create({ ...todo, userId: req.userId })

  res.json({ created: true, todo: newTodo })
})

router.delete('/:id', auth, async (req: AuthenticatedRequest, res) => {
  const todoId = req.params.id
  const userId = req.userId as string

  await Todo.remove(todoId, userId)

  res.json({ removed: true})
})

export default router
