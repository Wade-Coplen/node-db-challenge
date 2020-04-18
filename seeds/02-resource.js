
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ressource').insert([
        {id: 1, name: 'meeting room for sure.', description: 'This room will need to be mic\'d up.'},
        {id: 2, name: 'fake mustache.', description: 'this will make us look fabulous.'},
        {id: 3, name: 'fanatech driving set-up', description: 'This will be very expensive, but will be well worth it in the end.'}
      ]);
    });
};
