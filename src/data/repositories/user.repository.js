import { ValidationException } from "../../utils/exceptions/validation.exception.js";
import { messages } from "../../utils/messages.utils.js";
import { formatValidationError } from "../lib/format-validation-error.js";
import { User } from "../models/user.model.js";

export class UserRepository {
  #UserModel = User;

  find() {
    return this.#UserModel.find();
  }

  insert(entity) {
    try {
      return this.#UserModel.create(entity);
    } catch (exception) {
      if (exception instanceof Error.ValidationError) {
        const error = formatValidationError(exception);
        throw new ValidationException(messages.exceptions.validation, error);
      }

      throw exception;
    }
  }
}
