exports.up = knex =>
  knex.schema.createTable('app_users', (table) => {
    table.increments().primary();
    table.string('user_id').notNullable();
    table.string('mobile_id').notNullable();
    table.string('mobile_model');
    table.string('mobile_branch');
  
    table.timestamps(true, true);

    table.foreign('user_id').references('user_id').inTable('users')
    table.index('user_id');
    table.index('mobile_id');
  });

exports.down = knex => knex.schema.dropTable('app_users');
