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

    clearDoneItem = () => {
        const { todos } = this.state
        const countDone = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
        if (countDone && window.confirm('是否要刪除選擇的項目?')) {
            const newTodos = todos.filter((todo) => !todo.done)
            this.setState({ todos: newTodos })
        }
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const targetName = todos.filter((todo) => todo.id === id)[0].name
        if (window.confirm(`是否刪除 ${targetName}`)) {
            const newTodos = todos.filter((todo) => todo.id !== id)
            this.setState({ todos: newTodos })
        }
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

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
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
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDoneItem={this.clearDoneItem} />
                </div>
            </div>
        )
    }
}
