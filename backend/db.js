const pg = require("pg");

const db = new pg.Client({
  host: "ec2-23-23-133-10.compute-1.amazonaws.com",
  database: process.env.DATABASE_URL,
  ssl: true,
  port: 5432,
  user: "jwidpezbkdtmet",
});

db.connect();

module.exports = db;