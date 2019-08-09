const { DB_CONNECTION ={
host:'127.0.0.1',
user:'postgres',
password:'0000',
database:'users_ms',
port:'5432'
}} = process.env;
const MAX_CONNECTION_POOLSIZE = 5;

module.exports = {
    client: 'pg',
    connection: DB_CONNECTION,
    pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
    acquireConnectionTimeout: 5000,
};
