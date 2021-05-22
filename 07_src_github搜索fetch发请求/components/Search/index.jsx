import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Search extends Component {

    search=async()=>{
        console.log("Search组件发布数据了")
        
        // 获取用户输入（连续解构赋值+重命名）
        // const {value}=this.keywordElement
        // const {keywordElement:{value:keyword}}=this //解构赋值连续写法，并将value重命名为keyword
        const {keywordElement:{value:keyword}}=this //解构赋值连续写法
        // let obj={a:{b:{c:1}}}
        // const {a:{b:{c}}}=obj
        // console.log("js 解构赋值示例 ",c)
        console.log("用户输入为",keyword)
  
        // 发送请求前通知APP更新状态
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})

        //#region  发送网络请求--使用axios
        // axios.get(`http://localhost:3000/api3/search/users?q=${keyword}`).then(
        // axios.get(`/api3/search/users?q=${keyword}`).then(
        //     response=>{
        //                 // 请求成功后通知APP更新状态
        //         PubSub.publish('atguigu',{isLoading:false,users:response.data.items})

        // },
        //     error=>{
        //         console.log('失败了',error)
        //         PubSub.publish('atguigu',{isLoading:false,err:error.message})

        // }
        // )
        ////#region 


        // // 发送网络请求--fetch（未优化）
        // fetch(`/api3/search/users?q=${keyword}`).then(
        //     response=>{
        //         console.log('联系服务器成功了')
        //         return response.json()
        //     },
        //     error => {
        //         console.log('联系服务器失败了',error)
        //         return new Promise()//如果失败了，返回一个初始状态的promise实例，避免继续往下走 
        //     }
        // ).then(
        //     response =>{
        //         console.log('获取数据成功了',response)
        //     },
        //     error =>{
        //         console.log('获取数据失败了',error)}
        // )

                // 发送网络请求--fetch(优化)
                // fetch(`/api3/search/users?q=${keyword}`).then(
                //     response=>{
                //         console.log('联系服务器成功了')
                //         return response.json()
                //     }
                // ).then(
                //     response =>{
                //         console.log('获取数据成功了',response)
                //     }
                // ).catch(
                //     (error)=>{console.log('请求出错',error)}
                // )

                //用await，需要在最近的方法上加async
                //  目前使用率不高，原因是很多老版本浏览器不兼容,了解即可，工作中用的不多
                try {
                const response = await fetch(`/api3/search/users?q=${keyword}`)
                const data = await response.json()
                console.log('请求数据成功==',data.items)
                PubSub.publish('atguigu',{isLoading:false,users:data.items})

                } catch (error) {
                    console.log(error)
                PubSub.publish('atguigu',{isLoading:false,err:error.message})

                }
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
