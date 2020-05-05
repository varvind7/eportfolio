import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Introduction from './Contents/Introduction';
import Project from './Contents/Projects';


const { Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <Layout>

            <Content style={{ margin: '24px 16px 0' }}>
               
                <Introduction/>
                <Project/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>My Profile ©2020 Created by Arvind Narayan Srinivasan</Footer>
        </Layout>
    );
}

export default MainLayout;

