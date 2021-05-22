import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './index.css'

export default class List extends Component {
        // 状态在哪里，操作状态的方法就在哪里
        state={
            users:[],//初始化user
            isFirst:true,//是否为第一次打开页面
            isLoading:false,//标识是否处于加载中,
            err:''//存储请求相关错误信息
        }

        // 做初始化操作
        componentDidMount(){
            this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
                this.setState(stateObj)
                console.log("List租金收到数据了",stateObj)
            })
        }

        componentWillMount(){
            PubSub.unsubscribe(this.token)
        }
    render() {
        const {users,isFirst,isLoading,err}=this.state
        return (
            <div className="row">
            {
                isFirst? <h3>   欢迎输入关键字搜索</h3>:
                isLoading?<h3>Loading</h3>:
                err?<h3>{err}</h3>:
                users.map((userObj)=>{
                    return(
                        <div className="card" key={userObj.id}>
                        <a href={userObj.avatar_url} target="_blank">
                            <img alt="head_photo" src={userObj.html_url} style={{ width: '100px' }}></img>
                        </a>
                    <p className="card-text">{userObj.login}}</p>
                    </div>
                    )
                })
            }
        </div>
        )
    }
}
