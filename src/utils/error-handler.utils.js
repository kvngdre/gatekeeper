import { BaseException } from "./exceptions/index.js";
import { logger } from "./logger.utils.js";

export class ErrorHandler {
  /**
   *
   * @param {(BaseException|Error)} error
   */
  handleError(error) {
    if (!this.isTrustedError(error)) {
      this.#handleCriticalError(error);
    } else {
      this.#handleTrustedError(error);
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
