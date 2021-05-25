import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const { todos } = this.props
        const currentCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成{currentCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger">清除已完成任務</button>
            </div>
        )
    }
}
