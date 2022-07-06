const { Client } = require('pg')
const client = new Client({
    host: env('DATABASE_HOST', 'arrivnow.cnscjbmeyzwl.us-east-1.rds.amazonaws.com'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'crm-backend'),
    user: env('DATABASE_USERNAME', 'postgres'),
    password: env('DATABASE_PASSWORD', 'welcome2arrivnow'),
    ssl: env.bool('DATABASE_SSL', false),
//   user: 'sgpostgres',
//   host: '5432',
//   database: 'shivakanya',
//   password: 'kanya@25',
//   port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});