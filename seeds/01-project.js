
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Project Veritaus', description: 'Exposing liberal bias', project_complete: true},
        {name: 'Project Runway', description: 'Models walking and stuff', project_complete: true},
        {name: 'Project Gotham Racing', description: 'Awesom arcade racer', project_complete: false}
      ]);
    });
    
};
