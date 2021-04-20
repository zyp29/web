import React from 'react'
import { Input } from 'antd';
import sideicon1 from '../../assets/sideicon1.png';
import sideicon2 from '../../assets/sideicon2.png';
import sideicon3 from '../../assets/sideicon3.png';
import sideicon4 from '../../assets/sideicon4.png';
import sideicon5 from '../../assets/sideicon5.png';
import shape from '../../assets/shape.png';
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
                    <div className="tabContent">
                        <div className="sidebar">
                            <div className="sideTitle">
                                常用
                            </div>
                            <div className="sideItem">
                                <img src={sideicon5} alt="" />
                                报销
                            </div>
                            <div className="sideItem">
                                <img src={sideicon3} alt="" />
                                出差
                            </div>
                            <div className="sideItem">
                                <img src={sideicon2} alt="" />
                                请假
                            </div>
                            <div className="sideItem">
                                <img src={sideicon4} alt="" />
                                借款
                            </div>
                            <div className="sideItem">
                                <img src={sideicon1} alt="" />
                                销假
                            </div>
                        </div>
                        <div className="tabItem">
                            <div className="tabDescribe">
                                <div className="describeTitle">
                                    流程中心
                                </div>
                                <div className="hrItem">
                                    <div className="hr">
                                        HRP
                                    </div>
                                    <div className="hr">
                                        HCM
                                    </div>
                                    <div className="hr">
                                        CRM
                                    </div>
                                </div>
                                <div className="moreBtn">
                                    <span>
                                        MORE
                                    </span>
                                </div>
                            </div>
                            <div className="tabBox">
                                <table className="tabLayout">
                                    <thead className="tabThead">
                                        <tr>
                                            <th style={{ paddingLeft: "25px" }} className="tabCell">
                                                标题
                                            </th>
                                            <th className="tabCell">
                                                创建人
                                            </th>
                                            <th className="tabCell">
                                                当前节点
                                            </th>
                                            <th style={{ textAlign: "right", paddingRight: "10px" }} className="tabCell">
                                                创建时间
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="tabTbody">
                                        <tr>
                                            <td style={{ paddingLeft: " 10px" }}>【合同审批】13:00 - 14:00 专家接见，公司1楼大厅</td>
                                            <td>周环</td>
                                            <td>人事</td>
                                            <td style={{ textAlign: "right", paddingRight: "0" }}>2021-04-11</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingLeft: " 10px" }}>【合同审批】13:00 - 14:00 专家接见，公司1楼大厅</td>
                                            <td>周环</td>
                                            <td>人事</td>
                                            <td style={{ textAlign: "right", paddingRight: "0" }}>2021-04-11</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingLeft: " 10px" }}>【合同审批】13:00 - 14:00 专家接见，公司1楼大厅</td>
                                            <td>周环</td>
                                            <td>人事</td>
                                            <td style={{ textAlign: "right", paddingRight: "0" }}>2021-04-11</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingLeft: " 10px" }}>【合同审批】13:00 - 14:00 专家接见，公司1楼大厅</td>
                                            <td>周环</td>
                                            <td>人事</td>
                                            <td style={{ textAlign: "right", paddingRight: "0" }}>2021-04-11</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingLeft: " 10px" }}>【合同审批】13:00 - 14:00 专家接见，公司1楼大厅</td>
                                            <td>周环</td>
                                            <td>人事</td>
                                            <td style={{ textAlign: "right", paddingRight: "0" }}>2021-04-11</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="scheduleContent">
                            <div className="calendarContent">
                                <div className="dateDay">
                                    <span>18</span>
                                    <span>星期日</span>
                                </div>
                                <div className="calendarItem">
                                    <img src={shape} alt=""/>
                                    <div className="dateInfo">
                                        <div>
                                            2021年04月
                                        </div>
                                        <div>
                                            农历三月初四
                                        </div>
                                        <div>
                                            20°
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scheduleItem">
                                <div className="scheduleInfo">
                                    <div className="addIcon">

                                    </div>
                                    添加日程
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