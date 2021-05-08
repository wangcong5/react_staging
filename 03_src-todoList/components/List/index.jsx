import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

        // 对接收的props进行：类型、必要性的限制
        static propTypes={
            todos:PropTypes.array.isRequired,
            upDateTodo:PropTypes.func.isRequired,
            deleteTodo:PropTypes.func.isRequired
        }
    render() {
        const { todos,upDateTodo, deleteTodo} = this.props
        // const {id,name,done}=this.props

        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
                        return <Item key={todo.id} {...todo} upDateTodo={upDateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
