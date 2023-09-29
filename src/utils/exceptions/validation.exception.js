import { BaseException } from "./lib/base-exception.js";

export class ValidationException extends BaseException {
  constructor(message, errors) {
    super(400, message, errors);
  }
}
