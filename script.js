document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
let tasks = []; // Initialize tasks array

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
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
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to Local Storage
    }
}

function removeTask(taskText) {
    tasks = tasks.filter(task => task !== taskText); // Remove task from tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update tasks in Local Storage
}

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    }
});