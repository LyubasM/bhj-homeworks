const taskAdd = document.getElementById('task__input')
const taskAddBtn = document.getElementById('tasks__add')
const taskList = document.querySelector('.tasks__list')

const createTask = function(e) {
    e.preventDefault();
    if (taskAdd.value.trim() !== '') {
        let newTask = document.createElement('div');
        newTaskTitle = document.createElement('div');
        newTask.className = 'task';
        newTaskTitle.className = 'task__title';
        taskList.insertAdjacentElement('beforeend', newTask);
        newTask.insertAdjacentElement('afterbegin', newTaskTitle);
        newTask.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>')
        newTaskTitle.innerText = taskAdd.value;
    }
    taskAdd.value = '';
}

const removeTask = function(e) {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('div.task').remove();
    }
}

taskAddBtn.addEventListener('click', createTask);
taskList.addEventListener('click', removeTask);
