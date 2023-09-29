export class BaseException extends Error {
  constructor(httpCode, message, errors, isOperational = true) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = httpCode;
    this.errors = errors;
    this.isOperational = isOperational;

    Error?.captureStackTrace(this, this.constructor);
  }
}
