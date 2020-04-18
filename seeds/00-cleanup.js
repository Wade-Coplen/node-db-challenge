const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return clearInterval.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], //don't empty migration tables
  })
}