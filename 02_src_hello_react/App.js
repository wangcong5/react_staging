// 创建‘外壳’组件App
import React,{Component} from 'react'
import Hello from './components/Hello/hello'
import Welcome from './components/Welcome/Welcome'
import  hello from'./components/Hello/hello.module.css'
import './components/Welcome/Welcome.css'

// const {Component} =React
// 创建并暴露APP
export default class App extends Component{
    render(){
        return(
            <div>
                hello,react
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
// // 暴露App组件
// export default App