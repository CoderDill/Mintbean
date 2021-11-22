const pg = require("pg");

const db = new pg.Client({
  Host: "ec2-23-23-133-10.compute-1.amazonaws.com",
    Database: "d25kdq8jhkd5dd",
  Port: 5432
});

db.connect();

module.exports = db;
