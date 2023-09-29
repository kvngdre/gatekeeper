import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { logger } from "../utils/index.js";
import {
  errorHandlingMiddleware,
  resourceNotFoundHandler,
} from "./middleware/index.js";

import config from "../config/index.js";
import appRouter from "./routes/index.js";

/**
 * @typedef ApplicationOptions
 * @type {Object}
 * @property {Object} morgan
 * @property {("combined"|"common"|"dev"|"short"|"tiny")} morgan.mode
 */

const corsOptions = {
  origin: (origin, callback) => {
    if (config.allowedOrigins.indexOf(origin) !== -1) {
      console.log("allowed");
      callback(null, true);
    } else {
      console.log("not allowed");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export class Application {
  /** @type {express.Express} */
  #app;

  /**
   * @param {ApplicationOptions} options
   */
  constructor(options) {
    this.#setup(options);
  }

  /**
   * @param {ApplicationOptions} options
   */
  #setup(options) {
    this.#app = express();

    this.#app.use(helmet());
    this.#app.use(cors(corsOptions));
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
    this.#app.use(errorHandlingMiddleware);
  }

  get app() {
    return this.#app;
  }
}
