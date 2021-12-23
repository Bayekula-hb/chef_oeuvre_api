const {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
} = require("./database");
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql",
  },
};
