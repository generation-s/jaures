/**
 * @file The main file of the microservice which loads all modules of the application
 * @version 0.1.1
 */

const knex = require('knex')

// Temporary assignment of the application object
const app = {
  config: require('./config')
}

// Loading database clients
app.db = knex(app.config.db.knex)

module.exports = exports = app
