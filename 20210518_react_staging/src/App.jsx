import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    state = {
        todos: [

        ]
    }

    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        console.log(this.state.todos);
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} objLength={this.state.todos.length} />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}
