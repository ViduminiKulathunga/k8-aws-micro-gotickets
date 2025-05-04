import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof RequestValidationError) {
    return res
      .status(error.statusCode)
      .send({ errors: error.serializeError() });
  }

  if (error instanceof DatabaseConnectionError) {
    return res
      .status(error.statusCode)
      .send({ errors: error.serializeError() });
  }

  res.status(400).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};
