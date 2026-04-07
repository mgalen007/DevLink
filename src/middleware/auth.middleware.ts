import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AppError } from "./error.middleware"

dotenv.config();

interface AuthenticatedRequest extends Request {
  user?: jwt.JwtPayload;
}

const auth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) {
        throw new AppError("No token provided", 401)
    }
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY!
    ) as jwt.JwtPayload
    req.user = decoded
    next()
  } catch (err) {
    console.log(err)
    if (err instanceof jwt.JsonWebTokenError) {
        return void res.status(401).json({
        error: "Invalid token",
        })
    } 
    next(err)
  }
};

export default auth;
