import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import MainLayout from './Components/MainLayout'
import { Layout} from 'antd';

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
   <NavBar/>
    <MainLayout/>
  </Layout>
  );
 
}

export default App;
