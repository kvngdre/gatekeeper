export default {
  allowedOrigins: [
    "https://gatekeeper-inky.vercel.app",
    "http://localhost:5173",
  ],

  db: {
    uri: process.env.DB_URI,
  },

  port: process.env.PORT,
};
