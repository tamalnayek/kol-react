

//-----------------------------------------------
// DOM API
//-----------------------------------------------

// query dom-elements
let box = document.querySelector('.alert')
let greetBtn = document.querySelector('.btn-success')
let hideBtn = document.querySelector('.btn-danger')
let showBtn = document.querySelector('.btn-primary')

// bind event listeners & on event, process the event

greetBtn.addEventListener('click', e => {
    box.innerHTML = "good evening"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = 'block'
})

//----------------------------------------------------------
// XHR / Fetch API
//----------------------------------------------------------

let todosBtn = document.querySelector('.btn-dark')
todosBtn.addEventListener('click', e => {

    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(apiUrl) // IO
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let liTemplate = `
                <li class="list-group-item">
                    ${todo.id} - ${todo.title} - <span class="${todo.completed ? 'bg-success' : 'bg-warning'}">${todo.completed}</span>
                </li>
            `
                arr.push(liTemplate)
            })
            document.getElementById('todo-list').innerHTML = arr.join(" ")
        })


})


//----------------------------------------------------------
// Timer API
//----------------------------------------------------------


setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString()
}, 1000);