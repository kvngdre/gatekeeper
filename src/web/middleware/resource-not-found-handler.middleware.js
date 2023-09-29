import { NotFoundException } from "../../utils/exceptions/index.js";

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function resourceNotFoundHandler(req, res, next) {
  const exception = new NotFoundException("Resource Not Found", {
    path: req.path,
    method: req.method,
  });

  next(exception);
}
