$(document).ready(onReady);

function onReady() {
    console.log('jQuery has loaded successfully.');
    $('#button-create').on('click', createTask);
    displayTasks();
}

function displayTasks () {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((tasks) => {
        $("#table-tasks").empty();
        for (let task of tasks) {
            $('#table-tasks').append(`
                <tr>
                    <td>
                        <input type="checkbox" id="checkbox-completed">
                    </td>
                    <td>
                        <p>${task.task}</p>
                    </td>
                    <td>
                        <p>${task.comments}</p>
                    </td>
                    <td>
                        <p>${formatDate(task.date_assigned)}</p>
                    </td>
                    <td>
                        <p>${formatDate(task.date_due)}</p>
                    </td>
                    <td>
                        <p>${task.priority}</p>
                    </td>
                    <td>
                        <button id="button-delete">Delete</button
                    </td>
                </tr>
            `);
        }
    });
}

function createTask() {
    let task = {
         task: $('#input-task').val(),
         comments: $('#input-comments').val(),
         date_assigned: formatDate(new Date()),
         date_due: $('#input-date-due').val(),
         priority: $('#input-priority').val()
    }
    $.ajax({
         type: 'POST',
         url: '/tasks',
         data: task
    }).then((response) => {
        clearInputs();
        displayTasks();
    });
}

function formatDate(dateString) {
    let date = new Date(dateString);
    let dateFormatted = `${(date.getMonth() + 1)}-${date.getDate()}-${date.getFullYear()}`;
    return dateFormatted;
}

function clearInputs() {
    $('#input-task').val(''),
    $('#input-comments').val(''),
    $('#input-date-due').val(''),
    $('#input-priority').val('')
}