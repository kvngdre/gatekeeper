import { BaseException } from "./lib/base-exception.js";

export class ServerException extends BaseException {
  constructor(message, errors, stack, isOperational = false) {
    super(500, message, errors, isOperational);

    this.stack = stack;
  }
}
