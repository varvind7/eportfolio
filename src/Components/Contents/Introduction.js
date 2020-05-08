import React from 'react';
import { Row, Col, Avatar } from 'antd';
import profile from '../../assets/profile.jpg';
import './Introduction.css';



const introduction = () => {
    return(
        <div id="home" className="introDiv"  style={{ padding: 24, minHeight: 360, backgroundColor: '#fff'}}>
            
           
        <Row >
            <Col lg={8} xs={24}>
                <img className="img" src={profile} />
            </Col>

            <Col lg={8} xs={24} className="about">
                <h2 style={{ color: '#386fa4', fontWeight: 500 }}>Personal Details</h2>
           <p> <em>Name:</em>
           &nbsp;Arvind Narayan Srinivasan<br/>
            <em>Age:</em>
            &nbsp;23 years
            <br/>
            <em>Location: </em> 
            &nbsp; Windsor,ON,Canada</p>
            </Col>
            <Col lg={8} xs={24} className="about">
                <h2 style={{ color: '#386fa4', fontWeight: 500 }}>About me</h2>
                <p>Computer Science has always intrigued me because of the plethora of applications they
                possess and an interminable amount of technologies yet to come. I'm currently pursuing Master of Applied
                Computing at University of Windsor. I can best describe myself as a fast learner,
                team player and an ambitious person with programmatic experience in React,NodeJS,Java,Python with various personal and academic projects.</p>

            </Col>
        </Row>
      
    </div>
    );
};
export default introduction;