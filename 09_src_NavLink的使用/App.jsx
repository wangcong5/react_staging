import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home'//路由组件
import About from './pages/About'

import Header from './components/Header'//一般组件

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    render() {
        return (
            <div>

                {/* <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div> */}
                <Header name='wmc' age={14} />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中通过<a>标签跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在react中通过路由链接切组件 */}
                            {/* <BrowserRouter> */}

                            {/* 默认的active
                            <NavLink className="list-group-item" active to='about'>About</NavLink>
                            <NavLink className="list-group-item" to='home'>Home</NavLink> */}

                            <NavLink activeClassName='mc' className="list-group-item" to='about'>About</NavLink>
                            <NavLink activeClassName='mc'  className="list-group-item" to='home'>Home</NavLink>

                            {/* </BrowserRouter> */}

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path='/about' component={About} />
                                <Route path='/home' component={Home} />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
