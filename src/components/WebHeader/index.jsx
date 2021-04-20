import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import headerLogo from '../../assets/headerLogo.png'
import './index.less'

const WebHeader = () => {
    return (
        <div className="components-layout">
            <div className="logo">
                <img src={headerLogo} alt="logo" />
            </div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">nav1</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/Personal">nav1</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link>nav1</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default WebHeader;