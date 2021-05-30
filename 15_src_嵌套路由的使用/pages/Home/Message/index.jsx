import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li to='/msg1'>msg1</li>
                    <li to='/msg1'>msg2</li>
                    <li to='/msg1'>msg3</li>
                </ul>
                
            </div>
        )
    }
}
