export class BaseException extends Error {
  constructor(code, message, errors, isOperational = true) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.code = code;
    this.errors = errors;
    this.isOperational = isOperational;

    Error?.captureStackTrace(this, this.constructor);
  }
}
