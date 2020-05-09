import React from 'react';
import './App.css';
import MainLayout from './Components/MainLayout'
import { Layout } from 'antd';
import HeaderNav from './Components/HeaderNav';


class App extends React.Component {

  componentDidMount() {
    document.title = 'My Profile | Arvind';
  }
  render() {

    return (
      <Layout>
        <HeaderNav />
        <MainLayout />
      </Layout>
    );
  }


}

export default App;
