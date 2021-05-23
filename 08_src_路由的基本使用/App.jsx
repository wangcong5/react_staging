import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中通过<a>标签跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                  <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在react中通过路由链接切组件 */}
                            {/* <BrowserRouter> */}
                            <Link className="list-group-item" to='about'>About</Link>
                            <Link className="list-group-item" to='home'>Home</Link>
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
