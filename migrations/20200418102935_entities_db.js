
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable()
        .unique();
      tbl.text('description', 128);
      tbl.boolean('project_complete', false)
        .notNullable();
      
  })
  .createTable('resource', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable()
        .unique();
      tbl.text('description', 128);
  })
  .createTable('task', tbl => {
      tbl.increments();
      tbl.text('description', 128)
        .notNullable();
      tbl.text('notes', 128);
      tbl.boolean('task_complete', false);
      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('project')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project')
  .dropTableIfExists('resource')
  .dropTableIfExists('task')
};
