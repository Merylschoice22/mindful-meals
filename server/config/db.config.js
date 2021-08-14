module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "", // HEY!! dont forget to change according to your user.
  DB: "mindful_meals",
  dialect: "postgres",
  PORT: 5432,
  // POOL IS OPTIONAL :D ! is only for connections.
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
