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
    })
    .catch((dbErr) => {
        res.sendStatus(500);
    });
});

// POST ROUTE
router.post('/', (req, res) => {
    const task = req.body;
    const queryText = `
        INSERT INTO "tasks"
            ("task", "comments", "date_assigned", "date_due", "priority")
        VALUES
            ($1, $2, $3, $4, $5);
    `;
    const queryValues = [
        task.task,
        task.comments,
        task.date_assigned,
        task.date_due,
        task.priority
    ];
    pool.query(queryText, queryValues)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
        console.log(error);
         
    });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    let taskID = req.params.id;
    let queryText = `
      DELETE FROM "tasks"
        WHERE "id"=$1;
    `;
    let queryValues = [ taskID ];
    pool.query(queryText, queryValues)
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
});

module.exports = router;