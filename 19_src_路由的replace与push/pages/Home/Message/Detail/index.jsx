import React, { Component } from 'react'
const detailData = [
    { id: '01', content: 'persist' },
    { id: '02', content: 'fighting' },
    { id: '03', content: 'wonderful' }
]

export default class Detail extends Component {

    render() {
        // 接收params参数
        const { id, title } = this.props.match.params
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id
        })

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
