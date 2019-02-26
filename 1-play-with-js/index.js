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
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeAll() {
        let isAllCompleted = this.todos.every(todo => todo.completed);
        this.todos = this.todos.map(todo => {
            return { ...todo, completed: !isAllCompleted }
        })
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    display(filter) {
        //..
        if (filter === "ALL")
            this.todos.forEach(todo => console.log(todo))
    }
}

const service = new TodoService();