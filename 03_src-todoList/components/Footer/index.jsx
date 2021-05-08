import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    // 全选，handleCheckAll回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    // 清除回调
    handleClearAllDone=()=>{
        this.props.clearDone()
    }
    render() {
        const { todos } = this.props
        // 已完成个数
        // current 为遍历的todos中一个个todo对象
        // const doneCount = todos.reduce((pre, current) => { return pre + current.done }, 0)
        const doneCount = todos.reduce((pre, current) => { return pre + (current.done ? 1 : 0) }, 0)
        // 总数
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleCheckAll} type='checkbox' checked={doneCount === total &&total!==0? true : false}></input>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/ 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger" color='red'>清除已完成任务</button>
            </div>
        )
    }
}
