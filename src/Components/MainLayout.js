import React from 'react';
import './MainLayout.css';
import { Layout} from 'antd';
import { Row, Col,Avatar } from 'antd';
import profile from '../assets/profile.jpg'


const {  Content, Footer } = Layout;

const MainLayout = () => {
    return (
        <div className="layout">
            <Layout className="site-layout" style={{ marginLeft: 200  }}>
      {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0', overflow: 'initial',backgroundColor:'red' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center',backgroundColor:'#F3EFE0' }}>
        <Row>
      <Col lg={8} xs={24}>
      <img className="img" src={profile}/>
      </Col>
      <Col lg={8} xs={24} className="about">
          <h2 style={{color:'#22A39F',fontWeight:500}}>About me</h2>
          <p>nsgfnsgfnsfgnfsgnsfgnsfgnsfgnsfgngfs</p>

      </Col>
    </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
        </div>
    );
}

export default MainLayout;