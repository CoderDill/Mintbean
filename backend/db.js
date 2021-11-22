const pg = require("pg");

const db = new pg.Client({
  database:
    "postgres://jwidpezbkdtmet:c0bea0036c84f7b6b89e3d0beb9a15352d9abd40283b48df4722d428f52e9df2@ec2-23-23-133-10.compute-1.amazonaws.com:5432/d25kdq8jhkd5dd",
  ssl: "true",
});

db.connect();

module.exports = db;
