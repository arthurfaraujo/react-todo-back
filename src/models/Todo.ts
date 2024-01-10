import { prisma } from '../../prisma/connection'
import { TodoItf } from '../interfaces/interfaces'

const Todo = prisma.todo

async function create(todo: TodoItf) {
  const newTodo = await Todo.create({
    data: todo
  })

  return newTodo
}

async function update(todo: TodoItf) {
  const updatedTodo = await Todo.update({
    where: {
      id: todo.id
    },
    data: todo
  })

  return updatedTodo
}

async function remove(id: string, userId: string) {
  await Todo.delete({
    where: {
      userId,
      id
    }
  })
}

async function getAllByUser(userId: string) {
  const todos = await Todo.findMany({
    where: {
      userId
    }
  })

  return todos
}

export default {
  create,
  update,
  remove,
  getAllByUser
}