const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");

/** Related functions for users. */

class User {
  /** authenticate user with username, password.
   *
   * Returns { username }
   *
   **/

  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
      `SELECT id, username, password
           FROM users
           WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new ExpressError("Invalid Password");
  }

  /** Register user with data.
   *
   * Returns { username }
   *
   * Throws ExpressError on duplicates.
   **/

  static async register(username, password) {
    const duplicateCheck = await db.query(
      `SELECT username
           FROM users
           WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new ExpressError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await db.query(
      `INSERT INTO users
           (username,
            password)
           VALUES ($1, $2)
           RETURNING id, username`,
      [username, hashedPassword]
    );

    const user = result.rows[0];

    return user;
  }

  /** Find all users.
   *
   * Returns [{ username }, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT id, username
           FROM users
           ORDER BY id`
    );

    return result.rows;
  }

  /** Given a username, return data about user.
   *
   * Returns { id, username }
   *
   *
   * Throws ExpressError if user not found.
   **/

  static async get(username) {
    const userRes = await db.query(
      `SELECT id, username
           FROM users
           WHERE username = $1
           `,
      [username]
    );

    const user = userRes.rows[0];

    if (!user) throw new ExpressError(`No user: ${username}`);

    return user;
  }

  /** Delete given user from database; returns undefined. */

  static async remove(username) {
    let result = await db.query(
      `DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
      [username]
    );
    const user = result.rows[0];

    if (!user) throw new ExpressError(`No user: ${username}`);
  }
}

module.exports = User;
