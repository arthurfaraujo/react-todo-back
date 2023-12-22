import { prisma } from '../../prisma/connection'
import { UserItf } from '../interfaces/interfaces'

const User = prisma.user

async function create(user: UserItf) {
  const newUser = await User.create({
    data: user
  })

  return newUser
}

export default {
  create
}