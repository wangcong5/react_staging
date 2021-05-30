import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'//路由组件
import About from './pages/About'

import Header from './components/Header'//一般组件

import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    render() {
        return (
            <div>
                <Header name='wmc' age={14} />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <MyNavLink to='/about' title='About'/>
                            <MyNavLink to='/home' title='Home'/> */}
                            <MyNavLink to='/mc/about'>About</MyNavLink>
                            <MyNavLink to='/mc/home'>Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* Switch只要匹配上一个，就不会继续匹配下一个，路由多个(>1)时才用 */}
                                <Switch>
                                    <Route path='/mc/about' component={About} />
                                    <Route path='/mc/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
