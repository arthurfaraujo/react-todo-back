import { Response, NextFunction } from 'express'
import { AuthenticatedRequest } from '../interfaces/interfaces'
import jwt, { JwtPayload } from 'jsonwebtoken'

export function auth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void | Response {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) return res.status(401).json({ error: 'No token' })

    const auth = jwt.verify(token, process.env.JWT_SECRET as string)

    req.userId = (auth as JwtPayload).id
    return next()
  } catch (e) {
    res.status(401).json({ error: 'Unauthenticated' })
  }
}
