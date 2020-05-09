import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Introduction from './Contents/Introduction';
import Education from './Contents/Education';
import Project from './Contents/Projects';
import Skills from './Contents/Skills';
import LandingImg from './Contents/LandingImg';
import Contact from './Contents/Contact';

const { Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <div >

            <Content >


                <LandingImg />

                <Introduction />
                <Education />
                <Project />
                <Skills />
                <Contact />
            </Content>
            <Footer style={{ textAlign: 'center' }}>My Profile ©2020 Created by Arvind Narayan Srinivasan</Footer>
        </div>
    );
}

export default MainLayout;

