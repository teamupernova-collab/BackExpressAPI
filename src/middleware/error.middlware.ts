import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  res.status(err.status || 500).json({
    code: err.code || "INTERNAL_SERVER_ERROR",
    msg: err.message || "Unexpected error",
  });
};