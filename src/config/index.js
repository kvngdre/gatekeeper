export default {
  allowedOrigins: [
    "http://localhost:5173",
    "https://gatekeeper-inky.vercel.app/",
  ],

  db: {
    uri: process.env.DB_URI,
  },

  port: process.env.PORT,
};
