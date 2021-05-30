import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log("props is: ", this.props)
        // const { to, title, x } = this.props
        // const {title } = this.props

        return (
            <div>
                {/* <NavLink activeClassName='mc' className="list-group-item" to={to}>{title}</NavLink> */}
                <NavLink activeClassName='mc' className="list-group-item" {...this.props}></NavLink>
            </div>
        )
    }
}
