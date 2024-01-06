import { Router } from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

router.post('/', async (req, res) => {
  const newUser = req.body

  const user = await User.create(newUser)

  res.status(201).json({
    created: user ? true : false,
    user: newUser
  })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findUnique(email)

  if (!user) {
    return res
      .status(400)
      .json({ authenticated: false, message: 'User not found' })
  }

  if (user.password !== password) {
    return res
      .status(400)
      .json({ authenticated: false, message: 'Invalid password' })
  }

  res.status(200).json({
    authenticated: true,
    message: 'User authenticated',
    token: jwt.sign({ id: user.id, nickname: user.nickname }, JWT_SECRET, {
      expiresIn: '4h'
    })
  })
})

export default router
