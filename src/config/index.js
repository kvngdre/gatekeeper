export default {
  allowedOrigins: ["http://localhost:5173"],

  db: {
    uri: process.env.DB_URI,
  },

  port: process.env.PORT,
};
