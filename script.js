// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
  event.preventDefault();
  
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  // completedButton.innerText = '<i class="fast fa-check"></i>' - Doesn't work
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  
  if(item.classList[0] === 'trash-btn') {
    item.parentElement.remove();
  }

  if(item.classList[0] === 'complete-btn') {
    item.parentElement.classList.toggle('completed');
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    
    switch(e.target.value) {
      case('all'):
        todo.style.display = '';
        break;
      case('completed'):
        if(todo.classList.contains('completed')) {
          todo.style.display = '';
        } else {
          todo.style.display = 'none';
        }
        break;
      case('uncompleted'):
        if(todo.classList.contains('completed')) {
          todo.style.display = 'none';
        } else {
          todo.style.display = '';
        }
        break;
    }
  });
}