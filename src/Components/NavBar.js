import React from 'react';
import './NavBar.css';
import { Layout, Menu } from 'antd';
import {
  
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const NavBar = ()  => {

    return(
        <div className="navbar">
            <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
       
        position: 'fixed',
        left: 0,
        background:'#45b29a'
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
           
    >
      <div className="logo" >
      <Menu style={{background:'#45b29a',width:'100%'}}  theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />} className="menu" >
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined /> } className="menu">
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />} className="menu">
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />} className="menu">
          nav 4
        </Menu.Item>
     
      </Menu> 
      </div>
     
    </Sider>
        </div>
    );
}

export default NavBar;
