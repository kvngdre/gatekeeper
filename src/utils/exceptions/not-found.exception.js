import { BaseException } from "./lib/base-exception.js";

export class NotFoundException extends BaseException {
  constructor(message, errors = undefined, isOperational = true) {
    super(404, message, errors, isOperational);
  }
}
