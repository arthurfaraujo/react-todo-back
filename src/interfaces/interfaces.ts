import { Request } from 'express'

export interface TodoItf {
  id?: string
  title: string
  completed: boolean
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

export interface UserItf {
  id?: string
  nickname: string
  email: string
  password: string
  createdAt?: Date
}

export interface AuthenticatedRequest extends Request {
  userId?: string
}
