import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '看书', done: true },
            { id: '003', name: '看电影', done: false },
            { id: '004', name: '打扫', done: false },
            { id: '005', name: '洗衣服', done: false },
            { id: '006', name: '打游戏', done: true }
        ]
    }

    // addTodo用于添加一个todo，接收参数是todo对象
    addTodo = (todoObj) => {
        // 读取原todo
        const { todos } = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({ todos: newTodos })
    }

    // upDateTodo用于更新一个todo对象
    upDateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            // if(todoObj.id===id) return{...todoObj,done}
            // if(todoObj.id===id) return{...todoObj,done:done}

            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else { return todoObj }
        })
        console.log('@==>', newTodos)
        this.setState({ todos: newTodos })
    }

    // 用于删除一个todo对象
    deleteTodo = (id) => {
        // 获取原来的todos
        const { todos } = this.state
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id!==id
        })
        //    
        this.setState({ todos: newTodos });
    }

    // checkAllTodo用于全选
    checkAllTodo=(done)=>{
        console.log('@done',done)
        // 获取原来的todos
        const {todos}=this.state
        // 加工数据
        const newTodos= todos.map((todoObj)=>{
            console.log('***<',{...todoObj,done})
            return {...todoObj,done}//可以只写一个done，对象同名简化
        })

        // 更新状态
        this.setState({todos:newTodos})
    }

    // 用于请除所有已完成的
    clearDone=()=>{
        // 获取原来todos
        const {todos}=this.state
        // 过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })

        // 更新状态
        this.setState({todos:newTodos})

    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap"></div>
                <Header addTodo={this.addTodo} />

                <List todos={todos} upDateTodo={this.upDateTodo} deleteTodo={this.deleteTodo} />
                <Footer  todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
            </div>
        )
    }
}
