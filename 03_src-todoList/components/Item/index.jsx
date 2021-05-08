import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    // 标识鼠标移入、移除
    state = { mouse: false }
    // 鼠标移入移除回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            console.log('勾选、取消勾选某一个todo的回调', id, event.target.checked)
            this.props.upDateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo回调
    handleDelete = (id) => {
        console.log('准备删除', id)
        if(window.confirm("确定删除吗")){
        this.props.deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}></input>
                    <span>{name}</span>
                </label>

                {/* <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button> */}
                <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
