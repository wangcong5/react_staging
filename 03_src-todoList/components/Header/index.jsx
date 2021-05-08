import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

console.log(nanoid())
console.log(nanoid())
console.log(nanoid())
console.log(nanoid())
export default class Header extends Component {

    // 对接收的props进行：类型、必要性的限制
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        // 解构赋值获取target,keyCode
        const { target, keyCode } = event
        // 如果keyCode不是回车，直接返回
        if (event.keyCode !== 13) return
        // 添加的todo名称不能为空
        if(target.value.trim() ===''){
            alert('名称不能为空')
            return
        }
        
        console.log(target.value, keyCode)
        // 准备好一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        // 将todoObj床底给APP
        this.props.addTodo(todoObj)
        // 清空输入框
        target.value=''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type='text' placeholder="请输入你的任务名称，按回车确认"></input>
            </div>
        )
    }
}
