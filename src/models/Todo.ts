import { prisma } from '../../prisma/connection'
import { TodoItf } from '../interfaces/interfaces'

const Todo = prisma.todo

async function create(todo: TodoItf) {
  const newTodo = await Todo.create({
    data: todo
  })

  return newTodo.completed
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

async function getAll() {
  const todos = await Todo.findMany()

  return todos
}

export default {
  create,
  update,
  getAll
}