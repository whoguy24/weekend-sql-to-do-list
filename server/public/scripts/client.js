$(document).ready(onReady);

function onReady() {
    console.log('jQuery has loaded successfully.');
    $('#button-create').on('click', createTask);
    $('#table-tasks').on('click', '.button-delete', deleteTask);
    $('#table-tasks').on('click', '.checkbox-completed', handleCheckboxClick);
    clearInputs();
    displayTasks();
}

function displayTasks () {
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((tasks) => {
        $("#table-tasks").empty();
        for (let task of tasks) {
            let checkbox = '';
            if (!task.completed) {
                checkbox = ''
            }
            else {
                checkbox = ' checked'
            }
            $('#table-tasks').append(`
                <tr>
                    <td>
                        <input type="checkbox" class="checkbox-completed" data-id=${task.id} data-completed=${task.completed}${checkbox}>
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
                        <button class="button-delete" data-id="${task.id}">Delete</button
                    </td>
                </tr>
            `);
        }
    });
}

function validateInputs() {
    if (!$('#input-task').val() || !$('#input-date-due').val() || !$('#input-priority').val()) {
        console.log('Could not create task: required data could not be found.');
        alert('Please populate all required fields before proceeding.');
        return false;
    }
    else {
        return true;
    }
}

function createTask() {
    if (validateInputs()) {
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
}

function deleteTask() {
    let taskID = $(this).data('id');
    $.ajax({
         type: 'DELETE',
        url: `/tasks/${taskID}`
    }).then((response) => {
        displayTasks();
    })
};

function handleCheckboxClick () {
    let taskID = $(this).data('id');
    let completed = $(this).data('completed');
    if (!completed) {
        completed = true;
    } 
    else {
        completed = false;
    } 
    $(this).data('data-completed', completed )
    toggleTaskComplete(taskID, completed);
}

function toggleTaskComplete(taskID, completed) {
    $.ajax({
      type: 'PUT',
      url: `/tasks/${taskID}`,
      data: { completed: completed }
    }).then((result) => {
      displayTasks();
    }).catch((error) => {
        console.log(error);
    })
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