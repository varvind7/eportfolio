import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import MainLayout from './Components/MainLayout'
import { Layout,Row,Col} from 'antd';

import {  Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

// return (
//   <div className="layout">
//  <NavBar/>
//   <MainLayout/>
// </div>
// );

function App() {

  return(
    <Layout>
   <Row>
     <Col >
     <NavBar/>
     </Col>
   <Col offset={3} >
   <MainLayout/>
   </Col>
   
   </Row>
   
  </Layout>
  );
 
}

export default App;
