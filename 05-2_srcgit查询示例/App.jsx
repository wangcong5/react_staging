import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里
    state={
        users:[],//初始化user
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//标识是否处于加载中,
        err:''//存储请求相关错误信息
    }

    // saveUsers=(users)=>{
    //     this.setState({users});
    // }
    updateAppState=(stateObj)=>{
        this.setState(stateObj)//setState参数必须为对象，这里参数stateObj就是对象，直接传
    }

    render() {
        return (
            <div>
                {/* <Search saveUsers={this.saveUsers}/> */}
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/> {/* ...state表示把所有state都传过去，给props */}
            </div>
        )
    }
}
