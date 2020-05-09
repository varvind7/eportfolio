import React from 'react';
import './NavBar.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-scroll';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const NavBar = () => {

  return (

    <Sider
      className="nav"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu style={{ backgroundColor: 'black', height: '100%' }} className="menu" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="home" className="link" smooth={true} duration={1000}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="project" className="link" smooth={true} duration={1000}>Projects</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="skills" className="link" smooth={true} duration={1000}>Skills</Link>
        </Menu.Item>

      </Menu>
    </Sider>

  );
}

export default NavBar;
