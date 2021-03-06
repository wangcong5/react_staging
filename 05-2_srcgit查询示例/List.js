import React, { Component } from 'react'
import axios from 'axios'
import '../public/css/bootstrap.css'

export default class TRData extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            this.props.users.map((user,i)=>{

                return(
                    <tr key={user.id} className="text-center">
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.name}</td>
                    <td>{user.sex}</td>
                  </tr>
                )
            })
        )
    }
}
