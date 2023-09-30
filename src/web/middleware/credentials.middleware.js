import config from "../../config/index.js";

export function credentials(req, res, next) {
  const { allowedOrigins } = config;
  const { origin } = req.headers;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }

  next();
}
