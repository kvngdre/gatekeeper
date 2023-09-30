export default {
  allowedOrigins: [
    "https://gatekeeper-inky.vercel.app",
    "http://localhost:5073",
  ],

  db: {
    uri: process.env.DB_URI,
  },

  port: process.env.PORT,
};
