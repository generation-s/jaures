/**
 * @file The configuration file holding the database connections parameters
 * @version 0.1.0
 */

module.exports = exports = {
  knex: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'jaures',
      password: process.env.DB_PASSWORD || 'secret',
      database: process.env.DB_NAME || 'jaures'
    }
  }
}
