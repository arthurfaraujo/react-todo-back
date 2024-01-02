import { Router } from 'express'
import Todo from '../models/Todo'

const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.getAll()
  
  res.json({ todos })
})

export default router