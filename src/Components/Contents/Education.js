import React from 'react';
import {Divider, Row,Col} from 'antd';
import './Education.css';

const Education = () => {

    return(
        <div id="home"  style={{ padding: 24, minHeight: 360, backgroundColor: '#fff'}}>
           <Divider orientation="center"><h2 className="head">Education</h2></Divider>  
           <div className="educationDiv">
               <Row justify="center">
                <Col  lg={12} xs={24} >
                    <Row justify="center">
                        <Col>
                        <h1 className="school phnSchl">Masters in Applied Computing</h1>
                        </Col>
                    </Row>
                   
                    <Row justify="center">
                    <Col>
                    <h2 className="school">University of Windsor</h2>
                    </Col>
                    </Row>
                    <Row justify="center">
                    <Col>
                    <h2 className="school">Windsor, ON, Canada </h2>
                    </Col>
                    </Row>

                </Col>
                <Col  lg={12} xs={24} >
                    <p className="details">Course-based, professional program that 
                        provides with a solid foundation of the industry oriented practical aspects of computer science.
                        The skills and knowledge gained from this program will help me to develop a successful career in the growing software industry through practical projects, internships and in-class training.
                        </p>
                </Col>
               </Row>

                <br/><br/>
               <Row justify="center">
                <Col  lg={12} xs={24} >
                    <Row justify="center">
                        <Col>
                        <h1 className="school  phnSchl">B.Tech Software Engineering</h1>
                        </Col>
                    </Row>
                   
                    <Row justify="center">
                    <Col>
                    <h2 className="school  phnSchl">SRM Institute of Science and Technology</h2>
                    </Col>
                    </Row>
                    <Row justify="center">
                    <Col>
                    <h2 className="school  phnSchl">Kattankulathur, Tamil Nadu, India </h2>
                    </Col>
                    </Row>

                </Col>
                <Col  lg={12} xs={24} >
                    <p className="details">
                    The degree helped me to build technological base and achieve excellence in software engineering domains.This involves, analyzing the requirements, integration of software and hardware devices, innovative approaches to programming, understanding the complexities of software technology. Through this students will implement and deploy software applications to develop and control the quality of existing software system to meet the current trends.
                        </p>
                </Col>
               </Row>
           </div>
    
        <Divider orientation="center"><h2 className="head">My Projects</h2></Divider>
    </div>
    );
};

export default Education;

