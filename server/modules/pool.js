const pg = require('pg');
const Pool = pg.Pool;

const config = {
  host: 'localhost',
  database: 'tasks'
};

const pool = new Pool(config);

pool.on('error', (poolError) => {
  console.error(poolError);
});

module.exports = pool;