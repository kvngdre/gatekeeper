import express from "express";
import morgan from "morgan";

import { logger } from "../utils/index.js";
import { resourceNotFoundHandler } from "./middleware/index.js";
import appRouter from "./routes/index.js";

/**
 * @typedef ApplicationOptions
 * @type {Object}
 * @property {Object} morgan
 * @property {("combined"|"common"|"dev"|"short"|"tiny")} morgan.mode
 */

export class Application {
  /** @type {express.Express} */
  #app;

  /**
   *
   * @param {ApplicationOptions} options
   */
  constructor(options) {
    this.#setup(options);
  }

  /**
   *
   * @param {ApplicationOptions} options
   */
  #setup(options) {
    this.#app = express();

    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(
      morgan(options.morgan.mode, {
        stream: {
          write: (message) => {
            logger.http(message.trim());
          },
        },
      }),
    );

    this.#app.use("/api", appRouter);

    this.#app.use(resourceNotFoundHandler);
  }

  get app() {
    return this.#app;
  }
}
