import React from 'react'
import { Input, Progress } from 'antd';
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
                            <div className="tabLevel">
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
                                        <img src={shape} alt="" />
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
                                        <div className="addIcon">+</div>
                                    添加日程
                                </div>
                                    <div className="scheduleInfo">
                                        <div className="yuanIcon"></div>
                                    12:30需求评审
                                </div>
                                    <div className="scheduleInfo">
                                        <div className="yuanIcon"></div>
                                    15:00开始运营会议
                                </div>
                                    <div className="scheduleInfo">
                                        <div className="yuanIcon"></div>
                                    16:30会议
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabItem">
                            <div className="tabLevel" style={{ height: "auto" }}>
                                <div className="tabDescribe">
                                    <div className="workConfer">
                                        工作会议
                                </div>
                                    <div className="moreBtn">
                                        <span>
                                            MORE
                                    </span>
                                    </div>
                                </div>
                                <div className="tabBox">
                                    <table className="tabLayout">
                                        <thead className="worktabThead">
                                            <tr>
                                                <th style={{ paddingLeft: "14px", textAlign: "left" }} className="tabCell">
                                                    会议名称
                                            </th>
                                                <th className="tabCell">
                                                    会议类型
                                            </th>
                                                <th className="tabCell">
                                                    会议时间
                                            </th>
                                                <th className="tabCell">
                                                    会议地点
                                            </th>
                                                <th className="tabCell">
                                                    发起人
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody className="tabTbody">
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 15px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>例会</td>
                                                <td style={{ textAlign: "center" }}>04-11  14:30</td>
                                                <td style={{ textAlign: "center" }}>301</td>
                                                <td style={{ textAlign: "center" }}>王花</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="systemContent">
                                <div className="systemItem">

                                </div>
                                <div className="systemItem">

                                </div>
                                <div className="systemItem">

                                </div>
                                <div className="systemItem">

                                </div>
                            </div>
                        </div>
                        <div className="tabItem">
                            <div className="tabLevel" style={{ width: "100%", height: "auto" }}>
                                <div className="tabDescribe">
                                    <div className="taskConfer">
                                        我的任务
                                </div>
                                    <div className="moreBtn">
                                        <span>
                                            MORE
                                    </span>
                                    </div>
                                </div>
                                <div className="tabBox">
                                    <table className="tabLayout">
                                        <thead className="worktabThead">
                                            <tr>
                                                <th style={{ paddingLeft: "30px", textAlign: "left" }} className="tabCell">
                                                    任务名称
                                            </th>
                                                <th className="tabCell">
                                                    任务类型
                                            </th>
                                                <th className="tabCell">
                                                    开始时间
                                            </th>
                                                <th className="tabCell">
                                                    截止时间
                                            </th>
                                                <th className="tabCell">
                                                    进度
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody className="tabTbody">
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={50} strokeColor="#E44351" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#E44351"}}>
                                                            进行中
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={100} strokeColor="#809FA0A0" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#809FA0A0"}}>
                                                            已结束
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={0} trailColor="rgba(118, 207, 241, 0.2)" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#76CFF1"}}>
                                                            未开始
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={100} strokeColor="#809FA0A0" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#809FA0A0"}}>
                                                            已结束
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={0} trailColor="rgba(118, 207, 241, 0.2)" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#76CFF1"}}>
                                                            未开始
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={0} trailColor="rgba(118, 207, 241, 0.2)" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#76CFF1"}}>
                                                            未开始
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={0} trailColor="rgba(118, 207, 241, 0.2)" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#76CFF1"}}>
                                                            未开始
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ paddingLeft: " 30px", textAlign: "left" }}>部门会议</td>
                                                <td style={{ textAlign: "center" }}>日常任务</td>
                                                <td style={{ textAlign: "center" }}>2021-04-11 </td>
                                                <td style={{ textAlign: "center" }}>2021-04-23 </td>
                                                <td style={{ textAlign: "center", width: "250px" }}>
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ display: "flex", width: "125px", marginRight: "5px" }}>
                                                            <Progress percent={0} trailColor="rgba(118, 207, 241, 0.2)" showInfo={false} />
                                                        </div>
                                                        <div style={{color:"#76CFF1"}}>
                                                            未开始
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
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