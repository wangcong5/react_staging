import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search=()=>{
        // 获取用户输入（连续解构赋值+重命名）
        // const {value}=this.keywordElement
        // const {keywordElement:{value:keyword}}=this //解构赋值连续写法，并将value重命名为keyword
        const {keywordElement:{value}}=this //解构赋值连续写法
        // let obj={a:{b:{c:1}}}
        // const {a:{b:{c}}}=obj
        // console.log("js 解构赋值示例 ",c)
        console.log("用户输入为",value)
        // console.log("用户输入为",keyword)


        // 发送请求前通知APP更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})


        // 发送网络请求
        axios.get(`http://localhost:3000/api3/search/users?q=${value}`).then(
            response=>{
                console.log('成功了',response.data);
                // this.props.saveUsers(response.data.items)
                        // 请求成功后通知APP更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
        },
            error=>{console.log('失败了',error)}
        )
    }
    // 后端解决跨域 cors
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search GitHub Users</h3>
                <div>
                    <input ref={c=>this.keywordElement=c} type="text" placeholder="输入关键字搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
