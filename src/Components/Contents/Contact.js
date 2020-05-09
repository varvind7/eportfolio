import React from 'react';
import { Row, Col, Divider } from 'antd';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import './Contact.css';



const Contact = () => {
    return (
        <div id="contact" style={{ padding: 24, minHeight: 360, backgroundColor: '#fff' }}>
            <Divider orientation="center"><h2 className="head">Contact</h2></Divider>
            <Row justify="center">
                <Col>
                    <h1 className="quote"> Communication-the human connection-is the key to personal and career success - Paul J. Meyer</h1>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <h1 className="connect"> Lets get Connected!</h1>
                </Col>
            </Row>
            <Row className="conDiv" justify="center">
                <Col lg={6} xs={24}>
                    <a href="https://www.linkedin.com/in/arvind-narayan"><img className="conImg" src={linkedin} alt="LinkedIn" /></a>
                </Col>
                <Col lg={6} xs={24}>
                    <a href="https://www.facebook.com/vishal.arvind"><img className="conImg" src={facebook} alt="FaceBook" /></a>
                </Col>
                <Col lg={6} xs={24}>
                    <a href="https://github.com/varvind7"><img className="conImg" src={github} alt="GitHub" /></a>
                </Col>
            </Row>

        </div>
    );
};
export default Contact;