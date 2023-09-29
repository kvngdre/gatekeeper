import "dotenv/config.js";
import "express-async-errors";

import http from "http";

import config from "./config/index.js";
import { DBContext } from "./data/db-context.js";
import { Application } from "./web/application.js";

async function bootstrap() {
  const { port } = config;
  const { app } = new Application({ morgan: { mode: "dev" } });

  await DBContext.connect();

  const server = http.createServer(app);

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port:[${port}]`);
  });
}

bootstrap();
