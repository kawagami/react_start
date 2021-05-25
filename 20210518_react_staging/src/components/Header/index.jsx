import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

    handleKeyUp = (event) => {
        // console.log(this.props.objLength);
        const { keyCode, target } = event
        if (target.value.trim() === '') {
            alert('不可為空')
            return
        }
        if (keyCode !== 13) return
        const todoObj = { id: Math.floor(Math.random() * 1000000), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入task name，按下enter 確認" />
            </div>
        )
    }
}
