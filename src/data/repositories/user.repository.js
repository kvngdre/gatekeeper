import mongoose from "mongoose";

import { ValidationException } from "../../utils/exceptions/validation.exception.js";
import { messages } from "../../utils/messages.utils.js";
import { formatValidationError } from "../lib/format-validation-error.js";
import { User } from "../models/user.model.js";

export class UserRepository {
  #UserModel = User;

  async find() {
    return this.#UserModel.find();
  }

  async insert(entity) {
    try {
      return this.#UserModel.create(entity);
    } catch (exception) {
      if (exception instanceof mongoose.Error.ValidationError) {
        const error = formatValidationError(exception);
        throw new ValidationException(messages.exceptions.validation, error);
      }

      throw exception;
    }
  }

  async findById(id) {
    return this.#UserModel.findById(id);
  }

  async findOne(filter) {
    return this.#UserModel.findOne(filter);
  }

  async updateById(id, entity) {
    try {
      return this.#UserModel.findByIdAndUpdate(id, entity, { new: true });
    } catch (exception) {
      if (exception instanceof mongoose.Error.ValidationError) {
        const error = formatValidationError(exception);
        throw new ValidationException(messages.exceptions.validation, error);
      }

      throw exception;
    }
  }

  deleteById(id) {
    return this.#UserModel.findByIdAndDelete(id);
  }
}

export const userRepository = new UserRepository();
