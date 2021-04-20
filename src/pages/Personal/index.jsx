import React from 'react'
import { Input } from 'antd';
import './index.less'

const { Search } = Input;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {
    }
    onSearch () {

    }
    render () {
        return (
            <div className="webContentItem">
                <div className="contentItem">
                    <div className="personalPortal">
                        <div className="box">
                            <div className="portalTitle">
                                <span>个人门户</span>
                                <span>PERSONAL PORTAL</span>
                            </div>
                            <div className="searchItem">
                                <div className="searchBtn">
                                    <Search
                                        placeholder="站内搜索"
                                        allowClear
                                        enterButton="搜索"
                                        size="large"
                                        onSearch={this.onSearch}
                                    />
                                </div>
                                <div className="searchHot">
                                    搜索热点：我的日程 | 我的任务 | 我的任务 | 请假
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Home;