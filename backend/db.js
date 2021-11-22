const pg = require("pg");

const db = new pg.Client("postgresql:///colorings_db");

db.connect();

module.exports = db;
