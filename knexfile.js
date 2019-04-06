/**
 * @file Knex client configuration for the project
 */

module.exports = exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './jaures.sqlite'
    }
  },
  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME || 'jaures-preprod',
      user: process.env.DB_USER || 'jaures',
      password: process.env.DB_PASSWORD || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME || 'jaures-prod',
      user: process.env.DB_USER || 'jaures',
      password: process.env.DB_PASSWORD || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
}
