
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {       description: 'catch people in the act', 
                notes: 'We will be smeared in the press', 
                task_complete: true, 
                project_id: 1
        },

        {       description: 'judge people', 
                notes: 'There will be no survivors', 
                task_complete: false,
                project_id: 2
        },
        

        {       description: 'get 1st place in every race', 
                notes: 'race clean', 
                task_complete: true,
                project_id: 3              
        }
      ]);
    });
};
