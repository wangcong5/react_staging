import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err}=this.props
        return (
            // <div>
            //     <div className="card">
            //         <a href="https//github.com/reactjs" target="_blank">
            //             <img alt="head_photo" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622909308&t=c81e92f9ea73b064549fc69ecd3da1ea" style={{ width: '100px' }}></img>
            //         </a>
            //         <p className="card-text">reactjs</p>
            //     </div>
            // </div>

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
