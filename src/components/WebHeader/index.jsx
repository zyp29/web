import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import headerLogo from '../../assets/headerLogo.png'
import userhead from '../../assets/userhead .png'
import './index.less'

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
                    <div className="userItem">
                        <img src={userhead} alt="" />
                        <div className="userInfo">
                            <span>王青青</span>
                            <span>运营主管</span>
                        </div>
                    </div>
                    <div className="signOutBtn">
                        [退出]
            </div>
                </div>

            </div>
        </div>
    )
}

export default WebHeader;