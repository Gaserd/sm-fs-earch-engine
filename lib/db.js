const pg = require('pg');
 
var config = {
  user: 'postgres',  
  database: 'universities',  
  password: 'qwe123', 
  host: 'localhost', 
  port: 5432, 
  max: 100, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};
 
const pool = new pg.Pool(config);
 
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});
 
module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};
 
module.exports.connect = function (callback) {
  return pool.connect(callback);
};