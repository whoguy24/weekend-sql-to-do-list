const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();

// GET ROUTE
router.get('/', (req, res) => {
    console.log('GET /tasks');
    const sqlText = 'SELECT * FROM tasks;';
    pool.query(sqlText)
    .then((dbResult) => {
        res.send(dbResult.rows);
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        res.sendStatus(500);
    });
});

module.exports = router;