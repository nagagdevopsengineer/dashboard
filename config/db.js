const { Client } = require('pg')
const client = new Client({
  user: 'sgpostgres',
  host: '5432',
  database: 'shivakanya',
  password: 'kanya@25',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});