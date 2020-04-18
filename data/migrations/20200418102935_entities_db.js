
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .notNullable()
        .unique();
      tbl.text('description', 128);
      tbl.boolean('project_completed', false)
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
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
  .dropTableIfExists('resource')
  .dropTableIfExists('task')
};
