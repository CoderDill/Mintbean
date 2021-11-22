const db = require("../db");
const ExpressError = require("../expressError");

/** Related functions for colorings. */

class Coloring {
  /** Find all colorings.
   *
   * Returns [{ name, image}, ...]
   **/

  static async findAll() {
    const result = await db.query(
      `SELECT id, name, image
           FROM colorings
           ORDER BY id`
    );

    return result.rows;
  }

  static async create(name, image, user_id) {
    if (!name || !image || !user_id) {
      throw new ExpressError("Missing required data", 400);
    }
    const result = await db.query(
      `INSERT INTO colorings (name, image, user_id) 
      VALUES ($1, $2, $3)
      RETURNING id, name, image, user_id`,
      [name, image, user_id]
    );
    return result.rows[0];
  }

  static async getAll(user_id) {
    const results = await db.query(
      `SELECT id, name, image
           FROM colorings
           WHERE colorings.user_id = $1`,
      [user_id]
    );

    const coloring = results.rows[0];

    if (!coloring) throw new ExpressError(`No colorings`);

    return coloring;
  }

  /** Delete given coloring from database; returns undefined. */

  static async remove(id) {
    let result = await db.query(
      `DELETE
           FROM colorings
           WHERE id = $1
           RETURNING id`,
      [id]
    );
    const coloring = result.rows[0];

    if (!coloring) throw new ExpressError(`No coloring with id: ${id}`);
  }
}

module.exports = Coloring;
