module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "660182", // HEY!! dont forget to change according to your user.
  DB: "mindful_meals",
  dialect: "postgres",
  // POOL IS OPTIONAL :D ! is only for connections.
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
