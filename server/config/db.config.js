const parse = require("pg-connection-string").parse;

const config = parse(process.env.DATABASE_URL);
console.log("Postgres connection info", config);

module.exports = {
  HOST: config.host,
  USER: config.user,
  PASSWORD: config.password, // HEY!! dont forget to change according to your user.
  DB: config.database,
  dialect: "postgres",
  PORT: config.port,
  // POOL IS OPTIONAL :D ! is only for connections.
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
