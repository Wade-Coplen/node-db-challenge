
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'catch people in the act', notes: 'We will be smeared in the press', task_completed: true},
        {id: 2, description: 'judge people', notes: 'There will be no survivors', task_completed: false},
        {id: 3, description: 'get 1st place in every race', notes: 'race clean', task_completed: true}
      ]);
    });
};
