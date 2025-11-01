const todoInpurt = document.getElementById('new-todo');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Function to add a new todo item
addTodoBtn.addEventListener('click', addTodo);
todoInpurt.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        addTodo()
    }    
})
function addTodo() {
    const todoText = todoInpurt.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInpurt.value = '';
    }
}