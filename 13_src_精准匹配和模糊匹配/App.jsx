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
                            {/* 模糊匹配 */}
                            {/* 路径前加了其他路径，没匹配上就有问题 */}
                            {/* <MyNavLink to='/b/about'>About</MyNavLink>
                            <MyNavLink to='/a/home'>Home</MyNavLink> */}

                            {/* 路径后加了其他路径，只要前面匹配上就行 */}
                            <MyNavLink to='/about/b'>About</MyNavLink>
                            <MyNavLink to='/home/a'>Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* Switch只要匹配上一个，就不会继续匹配下一个，路由多个(>1)时才用 */}
                                <Switch>
                                    {/* <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} /> */}
                                    {/* 开启严格匹配 */}
                                    <Route exact path='/about' component={About} />
                                    {/* 不开启严格匹配，默认模糊匹配，除非特殊情况，一般模糊匹配就行 */}
                                    <Route path='/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
