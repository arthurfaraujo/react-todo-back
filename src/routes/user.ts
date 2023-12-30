import { Router } from 'express'
import User from '../models/User'

const router = Router()

router.post('/', (req, res) => {
  const newUser = req.body

  const user = User.create(newUser)

  res.json({
    created: true,
    user
  })
})

export default router
