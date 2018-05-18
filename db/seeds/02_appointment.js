exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: 'Conference Room', time:'13:45', user_id:1},
        {location: 'Downstairs', time:'12:31', user_id:2},
        {location: 'Meeting Room 1', time:'21:00', user_id:3}
      ]);
    });
};
