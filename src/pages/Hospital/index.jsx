import React from 'react'
import './index.less'
class Hospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }
    onChange(a, b, c) {
        console.log(a, b, c);
    }
    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div className="webContentItem ContentItem"  >
                <div className="contentItem">
                    <div className="hospitalPortal">
                        <div className="box">
                            <div className="portalTitle">
                                <span>医院门户</span>
                                <span>HOSPITAL PORTAL</span>
                            </div>
                        </div>
                    </div>
                    <div className="popularInfo">
                        <div className="popularContent">
                            <div className="popularImg">
                                <img src={require('../../assets/hosptialbg.jpg').default} alt="" />
                            </div>
                            <div className="popularNews">
                                <div className="popularTitle">
                                    哥伦比亚中国高管有序接种新冠疫苗
                                </div>
                                <p>
                                    3月24日上午，哥伦比亚中国集团总裁兼首席执行官陈美兰、集团副总裁兼首席服务官博诗岚、一同来到无锡旺庄街道社区卫生服务中心…
                                </p>
                                <div className="popularList">
                                    <ul>
                                        <li><a>哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                        <li><a>盘点2019年十大“高光时刻”备份</a></li>
                                        <li><a>哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                        <li><a>荣膺“2019先锋雇主奖项”</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="popularDate">
                            <div className="popularToday">
                                <div className="popularDay">
                                    <span>18</span>
                                    <span>星期日</span>
                                </div>
                                <div className="popularDayContent">
                                    <div>
                                        <img src={require('../../assets/shape.png').default} alt="" />
                                    </div>
                                    <div>
                                        <span>2021年04月</span>
                                        <span>农历三月初四</span>
                                        <span>20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="popularSchedule">
                                <p>
                                    <img src="" alt="" />
                                    <span>添加日程</span>
                                </p>
                            </div>
                            <div className="popularDaiySchedule">
                                <ul>
                                    <li><span>12:30卫生检查</span></li>
                                    <li><span>15:00上级接待</span></li>
                                    <li><span>16:30重要日程</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hospitalContent">

                        <div className="tabItem" style={{height:"auto"}}>
                            <div className="tabDescribe">
                                <div className="describeTitle">医院公文</div>
                                <div className="moreBtn">
                                    <span>MORE</span>
                                </div>
                            </div>
                            <div className="tabContent">
                                <ul>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">盘点2019年十大“高光时刻”</a></li>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">荣膺“2019先锋雇主奖项”</a></li>
                                    <li><a href="">为爱接力 | 2019 VIVA “爱无界” 慈善行动</a></li>
                                    <li><a href="">嘉兴凯宜医院辐射环评</a></li>
                                    <li><a href="">在冲向终点的路上，我们守护着每位参赛者再攀高峰</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabItem" style={{height:"auto"}}>
                            <div className="tabDescribe">
                                <div className="describeTitle" style={{ color: '#4CB6AD', borderBottom: "3px solid #4CB6AD" }}>人事任免</div>
                                <div className="moreBtn">
                                    <span>MORE</span>
                                </div>
                            </div>
                            <div className="tabContent">
                                <ul style={{ color: "#4CB6AD" }}>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">盘点2019年十大“高光时刻”</a></li>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">荣膺“2019先锋雇主奖项”</a></li>
                                    <li><a href="">为爱接力 | 2019 VIVA “爱无界” 慈善行动</a></li>
                                    <li><a href="">嘉兴凯宜医院辐射环评</a></li>
                                    <li><a href="">在冲向终点的路上，我们守护着每位参赛者再攀高峰</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hospitalSystem">
                            <ul>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />
                                        </span>
                                        <span>HRP系统</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />

                                        </span>
                                        <span>诊疗系统</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />

                                        </span>
                                        <span>ERP系统</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />

                                        </span>
                                        <span>CRM系统</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />

                                        </span>
                                        <span>HCM系统</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>
                                            <img src={require('../../assets/hrpsystem.png').default} alt="" />
                                        </span>
                                        <span>CRM系统</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hospitalFeatures">
                        <div className="tabFeatures">
                            <div className="tabIcon">
                                <img src={require('../../assets/tabIcon01.png').default} alt="" />
                            </div>
                            <div className="tabText">
                                <div>
                                    办公管理
                                </div>
                                <div>
                                    Office management
                                 </div>
                            </div>
                        </div>
                        <div className="tabFeatures">
                            <div className="tabIcon">
                                <img src={require('../../assets/tabIcon02.png').default} alt="" />
                            </div>
                            <div className="tabText">
                                <div>
                                    资产领用
                                </div>
                                <div>
                                    Asset collection
                                 </div>
                            </div>
                        </div>
                        <div className="tabFeatures">
                            <div className="tabIcon">
                                <img src={require('../../assets/tabIcon03.png').default} alt="" />
                            </div>
                            <div className="tabText">
                                <div>
                                    证明开具
                                </div>
                                <div>
                                    Proof of establishme
                                 </div>
                            </div>
                        </div>
                        <div className="tabFeatures">
                            <div className="tabIcon">
                                <img src={require('../../assets/tabIcon04.png').default} alt="" />
                            </div>
                            <div className="tabText">
                                <div>
                                    领导信箱
                                </div>
                                <div>
                                    Leader mailbox
                                 </div>
                            </div>
                        </div>
                    </div>


                    <div className="hospitalContent">
                        <div className="tabItem" style={{height:"auto"}}>
                            <div className="tabDescribe">
                                <div className="describeTitle" style={{ color: '#4CB6AD', borderBottom: "3px solid #4CB6AD" }}>规章制度</div>
                                <div className="moreBtn">
                                    <span>MORE</span>
                                </div>
                            </div>
                            <div className="tabContent">
                                <ul style={{ color: "#4CB6AD" }}>
                                    <li><a href="">2021.03.20最新版规章制度</a></li>
                                    <li><a href="">2021.03.20最新版规章制度</a></li>
                                    <li><a href="">2021.03.20最新版规章制度</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="tabItem" style={{height:"auto"}}>
                            <div className="tabDescribe">
                                <div className="describeTitle" style={{ color: '#BBAA6A', borderBottom: "3px solid #4CB6AD" }}>最热最新文档</div>
                                <div className="moreBtn">
                                    <span>MORE</span>
                                </div>
                            </div>
                            <div className="tabContent">
                                <ul style={{ color: "#BBAA6A" }}>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">盘点2019年十大“高光时刻”</a></li>
                                    <li><a href="">哥伦比亚中国携手玫琳凯为白衣天使圆梦</a></li>
                                    <li><a href="">荣膺“2019先锋雇主奖项”</a></li>
                                    <li><a href="">为爱接力 | 2019 VIVA “爱无界” 慈善行动</a></li>
                                    <li><a href="">嘉兴凯宜医院辐射环评</a></li>
                                    <li><a href="">在冲向终点的路上，我们守护着每位参赛者再攀高峰</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="tabItem" style={{height:"auto"}}>
                            <div className="tabDescribe">
                                <div className="describeTitle" style={{ color: '#4CB6AD', borderBottom: "3px solid #4CB6AD" }}>员工信息</div>
                                <div className="moreBtn">
                                    <span>MORE</span>
                                </div>
                            </div>
                            <div className="tabContent">
                                <ul className="tabBirth">
                                    <li>
                                        本月员工之星
                                        <a href="">
                                            <span>
                                                <img src={require('../../assets/hrpsystem.png').default} alt="" />
                                            </span>
                                            <span>
                                                人事部 王清清
                                                </span>
                                        </a>
                                    </li>
                                    <li>
                                        今日寿星

                                        <a href="">
                                            <span>
                                                <img src={require('../../assets/hrpsystem.png').default} alt="" />
                                            </span>
                                            <span>
                                                人事部 王清清
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hospital;