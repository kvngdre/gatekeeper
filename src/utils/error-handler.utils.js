import { BaseException } from "./exceptions/index.js";
import { logger } from "./logger.utils.js";

class ErrorHandler {
  /**
   *
   * @param {(BaseException|Error)} error
   */
  handleError(error) {
    if (this.isTrustedError(error)) {
      this.#handleTrustedError(error);
    } else {
      this.#handleCriticalError(error);
    }
  }

  /**
   *
   * @param {(BaseException|Error)} error
   */
  isTrustedError(error) {
    if (error instanceof BaseException) {
      return error.isOperational;
    }
    return false;
  }

  /**
   *
   * @param {Error} error
   */
  #handleCriticalError(error) {
    logger.fatal(error.message, error.stack);

    // Email or monitor or whatever
  }

  /**
   *
   * @param {BaseException} error
   */
  #handleTrustedError(error) {}
}

export const errorHandler = new ErrorHandler();
