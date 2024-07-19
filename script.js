document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        // Other initialization code
    });
    // Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the value of the task input
        const taskText = taskInput.value.trim();

        // If the task input is not empty
        if (taskText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', function() {
                li.remove(); // Remove the task when remove button is clicked
            });

            // Append remove button to list item
            li.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(li);

            // Clear task input
            taskInput.value = '';
        } else {
            // Alert user if task input is empty
            alert('Please enter a task!');
        }
    }
    function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;
    
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            li.remove();
            removeTask(taskText);
        });
    
        li.appendChild(removeButton);
        taskList.appendChild(li);
    
        tasks.push(taskText); // Add task to tasks array
    
        if (save) {
            // Update Local Storage with the updated tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key press on task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});