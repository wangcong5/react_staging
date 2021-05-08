import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    getStudentData=()=>{
        axios.get('http://localhost:3000/api2/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }

    getLayUiData=()=>{
        axios.get('http://localhost:3000/api1/demo/table/user/?page=1&limit=10').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }

    render() {
        return (
            <div>
                APP..
                <button onClick={this.getStudentData}>点我获取学生信息</button>
                <button onClick={this.getLayUiData}>点我获取LayUi接口信息</button>
            </div>
        )
    }
}
