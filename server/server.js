const express = require('express');
const app = express();
const PORT = 5000;

// const taskRouter = require('./routes/tasksRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('server/public'));

// app.use('/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`)
});
