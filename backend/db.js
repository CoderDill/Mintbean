const pg = require("pg");

const db = new pg.Client();

db.connect();

module.exports = db;
