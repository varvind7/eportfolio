import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Introduction from './Contents/Introduction';
import Project from './Contents/Projects';
import Skills from './Contents/Skills';

const { Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <div >

            <Content style={{ margin: '24px 16px 0' }}>
               
                <Introduction/>
                <Project/>
                <Skills/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My Profile ©2020 Created by Arvind Narayan Srinivasan</Footer>
        </div>
    );
}

export default MainLayout;

