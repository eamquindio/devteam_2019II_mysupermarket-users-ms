exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments().primary();
    table.string('user_id').notNullable();
    table.string('user_name').notNullable();
    table.string('name');
    table.string('mail');

    table.timestamps(true, true);

    table.unique(['user_name']);
    table.unique(['user_id']);
  });

exports.down = knex => knex.schema.dropTable('users');
