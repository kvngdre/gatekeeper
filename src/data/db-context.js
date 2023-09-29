import mongoose from "mongoose";

import config from "../config/index.js";
import { logger } from "../utils/index.js";

export class DBContext {
  static async connect() {
    try {
      const { uri } = config.db;

      await mongoose.connect(uri);
      logger.info("Connected to database");
    } catch (error) {
      console.error("Failed to connect to database", error);
      process.exit(1);
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
  }
}
