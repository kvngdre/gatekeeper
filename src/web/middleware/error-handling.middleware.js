// eslint-disable-next-line no-unused-vars
import { BaseException } from "../../utils/exceptions/index.js";
import { errorHandler } from "../../utils/index.js";
import BaseHttpResponse from "../lib/base-http-response.js";

/**
 *
 * @param {(BaseException|Error)} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function errorHandlingMiddleware(err, req, res, next) {
  if (err instanceof SyntaxError && "body" in err) {
    const response = BaseHttpResponse.failed(
      `Error parsing JSON: ${err.message}`,
      err,
    );
    return res.status(400).json(response);
  }

  errorHandler.handleError(err);

  if (errorHandler.isTrustedError(err)) {
    const response = BaseHttpResponse.failed(err.message, err.errors);
    return res.status(err.httpCode).json(response);
  }

  const response = BaseHttpResponse.failed("Something Went Wrong");
  res.status(500).json(response);

  return next();
}
