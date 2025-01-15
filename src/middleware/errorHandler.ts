import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.status === 404) {
    return res.status(404).json({ message: err.message || "Not Found" });
  }

  res.status(500).json({ message: "Internal Server Error" });
};

export default errorHandler;
