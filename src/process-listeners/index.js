/* eslint-disable no-param-reassign */
import { errorHandler } from "../utils/index.js";

function registerProcessListeners() {
  process.on("unhandledRejection", (reason) => {
    reason.message = `unhandled Promise Rejection: ${reason.message}`;
    errorHandler.handleError(reason);
  });

  process.on("uncaughtException", (error) => {
    error.message = `Uncaught Exception: ${error.message}`;
    errorHandler.handleError(error);
  });
}

registerProcessListeners();
