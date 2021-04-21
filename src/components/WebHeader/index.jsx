import React from 'react'
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import {
    SettingFilled,
    QuestionCircleOutlined,
    CaretRightOutlined
} from '@ant-design/icons';
import headerLogo from '../../assets/headerLogo.png'
import userhead from '../../assets/userhead .png'
import './index.less'

const menu = (
    <div className="userSetting">
        <div className="userInfoItem">
            <img src={userhead} alt="" />
            <div className="userDepartment">
                <div>
                    <Link>王青青</Link>
                业务五部总经理
                </div>
                <div className="userAddress">
                    泛微--上海大区/上海EBU七部.........
                </div>
            </div>
        </div>
        <div className="settingList">
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        字体设置
                    </div>
                </div>
                <div className="settingAction">
                    <div className="actionTitle">
                        <QuestionCircleOutlined />
                        <div style={{ padding: "0 10px" }}>
                            默认
                        </div>
                        <CaretRightOutlined />
                    </div>
                </div>
            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        语言选择
                    </div>
                </div>
                <div className="settingAction">
                    <div className="actionTitle">
                        <div style={{ padding: "0 10px" }}>
                            简体中文
                        </div>
                        <CaretRightOutlined />
                    </div>
                </div>
            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        个性化设置
                    </div>
                </div>
            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        密码设置
                    </div>
                </div>
            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        主题中心
                    </div>
                </div>

            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        布局选择
                    </div>
                </div>

            </div>
            <div className="settingItem">
                <div className="settingTitle">
                    <SettingFilled />
                    <div className="textItem">
                        退出
                    </div>
                </div>

            </div>
        </div>
    </div>
);
const WebHeader = () => {
    return (
        <div>
            <div className="components-layout" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                <div className="logo">
                    <img src={headerLogo} alt="logo" />
                </div>
                <div className="headerRight">
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/">
                                <span className="navTitle">集团</span>
                                <span>GROUP</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/">
                                <span className="navTitle">医院</span>
                                <span>HOSPITAL</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/Personal">
                                <span className="navTitle">个人</span>
                                <span>PERSONAL</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/">
                                <span className="navTitle">流程</span>
                                <span>PROCESS</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/">
                                <span className="navTitle">会议</span>
                                <span>MEETING</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/">
                                <span className="navTitle">任务</span>
                                <span>TASK</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/">
                                <span className="navTitle">项目</span>
                                <span>ITEM</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Dropdown trigger="click" overlay={menu} placement="bottomLeft" arrow>
                        <div className="userItem">
                            <img src={userhead} alt="" />
                            <div className="userInfo">
                                <span>王青青</span>
                                <span>运营主管</span>
                            </div>
                        </div>
                    </Dropdown>

                    <div className="signOutBtn">
                        [退出]
                     </div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;