import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    render() {
        return (
            <div>
                <Search />
                <List />
            </div>
        )
    }
}
