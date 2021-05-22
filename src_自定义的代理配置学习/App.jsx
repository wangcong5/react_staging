import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

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

    getStudentData=()=>{
        // axios.get('http://localhost:3000/api2/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ').then(
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }

    getOnesData=()=>{
        axios.get('/api3/api/ones/getDetect?projectId=13924&cn=1&sn=10&versionId=12222&assigned=zhongguoxin').then(
        // axios.get('/api/one÷s/getDetect?projectId=13924&cn=1&sn=10&versionId=12222&assigned=zhongguoxin').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }
    getOnesData2=()=>{
        axios.get('/apij/api/assist/getAllAuthor/CaseMsg2').then(
        // axios.get('/api/one÷s/getDetect?projectId=13924&cn=1&sn=10&versionId=12222&assigned=zhongguoxin').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }
    getRandomData=()=>{
        axios.get('/apik/api/?results=10&inc=name,registered&nat=fr').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }
    getRunoobData=()=>{
        axios.get('/jokeapi/joke/randJoke.php?key=7c51fd87e10fa755d6659c22b14bcb16').then(
            response=>{
                console.log("成功了",response.data);
            },
            error=>{
                console.log("失败了",error);
            }
        )
    }
    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
        .then(json => console.log("mcccc+++",json))
      }

    render() {
        return (
            <div>
                APP..
                <button onClick={this.getLayUiData}>点我获取LayUi接口信息</button>
                <button onClick={this.getStudentData}>点我获取学生信息</button>
                <button onClick={this.getOnesData}>点我获取Ones接口信息</button>
                <button onClick={this.getOnesData2}>点我获取Ones接口信息2</button>
                <button onClick={this.getRunoobData}>点我获取菜鸟接口信息</button>
                <button onClick={this.getRandomData}>点我获取随机接口信息</button>

            </div>
        )
    }
}
