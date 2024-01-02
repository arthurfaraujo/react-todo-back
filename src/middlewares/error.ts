import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { Request, Response, NextFunction } from 'express'

class HttpException extends Error {
  status: number
  message: string

  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    error: 'Not found'
  })
}

export function errorHandler(
  err: HttpException | PrismaClientKnownRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof PrismaClientKnownRequestError) {
    return res.status(500).json({
      error: err.message,
      code: err.code,
      data: err.meta
    })
  } else if (err instanceof HttpException) {
    return res.status(err.status).json({
      error: err.message
    })
  }
}
