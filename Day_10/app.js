let input = document.querySelector('form input')
let button = document.querySelector('form button')
let form = document.querySelector('form')
let todos = document.querySelector('.todos')
let listTodos = []

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let inputValue = input.value.trim()
    if (inputValue) {
        addTodoElement({
            text: inputValue,
            status: "none"
        })

        saveTodoList()
    }


    input.value = ''
    input.focus()
})

function addTodoElement(todo) {

    let text = todo.text
    let isExistTodoElement = false
    if (listTodos) {
        listTodos.forEach(todoItem => {
            if (text === todoItem) {
                isExistTodoElement = true
            }
        })
    }

    if (isExistTodoElement) {
        alert("The todo list have already exist!")
    } else {
        let li = document.createElement('li')
        li.innerHTML = `
            <span>${todo.text}</span>
            <i class="fas fa-trash-alt"></i>`  
        if (todo.status === 'done')
            li.setAttribute('class', 'done')
    
        
        li.querySelector('span').addEventListener('click', function (event) {
            li.classList.toggle('done')
            saveTodoList()
        })
        li.querySelector('i').addEventListener('click', function (e) {
            this.parentElement.remove()
            listTodos.pop(todo.text)
            saveTodoList()
        })
        todos.appendChild(li)  
        listTodos.push(todo.text)
    }   
}

function saveTodoList() {
    let todoList = document.querySelectorAll('li')
    let todoStorage = []
    if (todoList) {
        todoList.forEach(function (item) {
            let text = item.querySelector('span').innerText
            let status = item.querySelector('span').getAttribute('class')
            todoStorage.push({
                text,
                status
            })
        })
    }
    
    localStorage.setItem('todoList', JSON.stringify(todoStorage))
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'))
    if (data) {
        data.forEach(function (item) {
            addTodoElement(item)
        })
    }
}

init()