
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Project Veritaus', description: 'Exposing liberal bias', project_complete: true},
        {id: 2, name: 'Project Runway', description: 'Models walking and stuff', project_complete: true},
        {id: 3, name: 'Project Gotham Racing', description: 'Awesom arcade racer', project_complete: ''}
      ]);
    });
    
};
