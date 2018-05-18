
exports.up = function(knex, Promise) {
  return knex.schema.createTable("user",(table)=>{
   table.increments(); // Creates id column
   table.string("name"); // Creates name column as varchar(255)
   table.string("email"); // Creates email column as varchar(255)
   table.string("password"); // Creates password column as varchar(255)
   table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable("user");
};
