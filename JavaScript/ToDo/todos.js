
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for( todo of todos){
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');

        let posicao = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `deleteTodo(${posicao})`);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        linkElement.appendChild(linkText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    let todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao){
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}