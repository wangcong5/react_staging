import React, { Component } from 'react'
import { Button, DatePicker, Upload,Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { SearchOutlined, WechatOutlined, WeiboOutlined, UploadOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'
import "antd/dist/antd.less"


export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    handeQuery = () => {
        console.log("嫦娥")
    }

    handleClick=()=>{
        alert("查询成功")
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        const { RangePicker } = DatePicker;

        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [
                {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                },
                {
                    uid: '2',
                    name: 'yyy.png',
                    status: 'done',
                    url: 'http://www.baidu.com/yyy.png',
                },
                {
                    uid: '3',
                    name: '736635c159e34049b93ac1af77a9677e!1242x9999.jpeg',
                    status: 'done',
                    url: 'https://img2.woyaogexing.com/2020/01/23/736635c159e34049b93ac1af77a9677e!1242x9999.jpeg',
                }
            ],
        };

        return (
            <div>
                APP..
                <button >查看其他资源</button>

                <Button onClick={this.handeQuery} type="primary">查询</Button>

                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>

                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={this.handleClick}/>
                </Tooltip>
                <br />

                <hr />
                <WechatOutlined rotate={15} style={{ fontSize: '20px', color: '#006000' }} />

                <WeiboOutlined rotate={1} style={{ fontSize: '20px', color: '#F75000' }} />

                <DatePicker onChange={this.onChange} />

                <RangePicker />
                <RangePicker onChange={this.onChange} />


                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </div>
        )
    }
}
