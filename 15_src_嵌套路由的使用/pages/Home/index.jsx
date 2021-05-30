import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import { Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>

                <ul className='nav nav-tabs'>
                    <li>
                        <MyNavLink className='list-group-item' to='/home/news'>News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink className='list-group-item' to='/home/message'>Message</MyNavLink>
                    </li>

                </ul>
                {/* 注册路由 */}
                <Route path='/home/news' component={News}></Route>
                <Route path='/home/message' component={Message}></Route>
                {/* <News/>
                <Message/> */}
            </div>
        )
    }
}
