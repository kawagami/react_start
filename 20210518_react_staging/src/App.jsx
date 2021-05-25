import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    state = {
        todos: [
            { id: 1, name: '預設資料1', done: false },
            { id: 2, name: '預設資料2', done: false },

        ]
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => todo.id !== id)
        this.setState({ todos: newTodos })
    }

    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }
    
    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} objLength={this.state.todos.length} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} />
                </div>
            </div>
        )
    }
}
