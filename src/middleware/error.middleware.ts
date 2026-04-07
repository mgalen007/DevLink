import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

const error = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);

  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || "An error occurred, try again later";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default error;
