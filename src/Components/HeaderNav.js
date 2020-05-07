import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import {Link} from 'react-scroll';
import './HeaderNav.css';
import {
  
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const HeaderNav = () => {

    return (
        <div>

      
        <Header className="headNav" style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:'#386fa4' }}
        
    
        >
        <div className="logo" />
        <Menu style={{backgroundColor:'#386fa4',borderStyle:'none',width:'100%'}} mode="horizontal" >
        <Menu.Item key="1" icon={<UserOutlined />}>
         <Link to="home" className="linkHead" smooth={true} duration={1000}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to="project" className="linkHead" smooth={true} duration={1000}>Projects</Link>
        </Menu.Item>
        <Menu.Item key="3"  icon={<UploadOutlined />}>
        <Link to="skills" className="linkHead" smooth={true} duration={1000}>Skills</Link>
        </Menu.Item>
        </Menu>
      </Header>
      </div>
    );

};
export default HeaderNav;