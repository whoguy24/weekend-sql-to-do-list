CREATE TABLE tasks (
	"id" SERIAL,
    "task" varchar(256),
    "comments" varchar(256),
    "priority" varchar (256),
    "completed" boolean,
    "date_assigned" date,
    "date_due" date
);

INSERT INTO "tasks"
	("task", "comments", "priority", "completed", "date_assigned", "date_due")
VALUES
	('Build database table.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Import boilerplate files into public folder.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Source files into index.html.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Install express and pg.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Import boilerplate server code into server.js.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build static elements in index.html.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Ensure server is running normally.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build server routes.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Wire up server routes to server.js.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build sample table in index.html.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build jQuery code in front end client.js.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build and test GET route.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build and test POST route.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build and test PUT route.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build and test DELETE route.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Refactor client.js code for readability.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Refactor server.js code for readability.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Refactor router code for readability.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Style index.html with basic styling.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build create task functionality.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build delete task functionality.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Build completed checkbox.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Style tasks to reflect completed status.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Style static elements in index.html with nicer styling.', '', 'Low', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Style dynamic elements in index.html with nicer styling.', '', 'Low', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Write detailed comments in client.js.', '', 'Low', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Write detailed comments in server.js.', '', 'Low', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Write detailed comments in tasksRouter.js.', '', 'Low', 'FALSE', '11/19/2021', '11/21/2021'),
    ('Write README file.', '', 'Normal', 'FALSE', '11/19/2021', '11/21/2021')
;
