"use strict"

// Todo app

// Model / State

class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

// Service

class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(newTitle) {
        // ...
        let newTodo = new Todo(newTitle)
        // this.todos.push(newTodo);
        this.todos = this.todos.concat(newTodo);
    }
    editTodo(id, newTitle) {
        //..
    }
    completeTodo(id) {
        //.
    }
    deleteTodo(id) {
        //
    }
    completeAll() {
        //..
    }
    clearCompleted() {

    }
    display(filter) {
        //..
        if (filter === "ALL")
            this.todos.forEach(todo => console.log(todo))
    }
}

const service = new TodoService();