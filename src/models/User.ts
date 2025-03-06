import { prisma } from '../../prisma/connection'
import { UserItf } from '../interfaces/interfaces'

const User = prisma.user

async function create(user: UserItf) {
  const newUser = await User.create({
    data: user
  })

  return newUser
}

async function findUnique(email: string) {
  const user = await User.findUnique({
    where: {
      email
    }
  })

  return user
}

export default {
  create,
  findUnique
}