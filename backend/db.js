const pg = require("pg");

const db = new pg.Client({
  user: "jwidpezbkdtmet",
  password: "c0bea0036c84f7b6b89e3d0beb9a15352d9abd40283b48df4722d428f52e9df2",
  database: "d25kdq8jhkd5dd",
  port: 5432,
  host: "ec2-23-23-133-10.compute-1.amazonaws.com",
  ssl: true,
});

db.connect();

module.exports = db;
