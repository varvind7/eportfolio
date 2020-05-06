import React from 'react';
import './Projects.css';
import { Row, Col, Button } from 'antd';
import { GithubOutlined, EyeFilled,ExportOutlined } from '@ant-design/icons';
import MyBurger from '../../assets/MyBurger.JPG';
import winhacks from '../../assets/winhacks.JPG';
import library from '../../assets/library.JPG';
import hospital from '../../assets/hospital.JPG'


const projects = () => {
    return (
        <div id="project" className="techSkills about">
            <Row justify="center">
                <Col>
                <h2 className="head">My Projects</h2>
                </Col>
            </Row>
            
            <div className="projects">
                <div className="burger">
                    <Row justify="center">
                        <Col > <h3 className="pTitle">MyBurger</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <h3 className="burgerTools">React,Redux,FireBase</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <img src={MyBurger}  className="projectImg burgerImg" /></Col>
                    </Row>

                    <Row justify="center">
                        <Col > <Button className="btn" type="link" href="https://github.com/varvind7/BurgerBuilderReact"> GitHub
                            <GithubOutlined/>
                            </Button>
                        </Col>
                        <Col  > <Button className="btn" type="link" href="https://react-my-burger-d91f2.web.app/"> Demo
                        <EyeFilled /> 
                            </Button>
                        </Col>
                      
                    </Row>

                    <Row justify="center">
                        <Col span={24}>
                            {/* <p>
                                A complete React project developed through online tutorials in order to learn React and its other functionalities such as
                                React components,state management, React hooks,Routing,React-Redux. The project is supported by Firebase backend.

                        </p> */}
                        </Col>
                    </Row>


                </div>

                <div className="winhacks">
                    <Row justify="center">
                        <Col > <h3 className="winHead">Lost In The Seperation (WinHacks 2020)</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <h3 className="winhacksTools">React,Redux,FireBase,NodeJS</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <img src={winhacks} className="projectImg" /></Col>
                    </Row>

                    <Row justify="center">
                        <Col > <Button className="btn" type="link" href="https://github.com/varvind7/Winhacks2020"> GitHub
                            <GithubOutlined/>
                            </Button>
                        </Col>
                        <Col  > <Button className="btn" type="link" href="https://winhacks2020-88149.firebaseapp.com/"> Demo
                        <EyeFilled /> 
                            </Button>
                        </Col>
                        <Col  > <Button className="btn" type="link" href="https://devpost.com/software/lits-lost-in-the-separation"> DevPost
                        <ExportOutlined /> 
                            </Button>
                        </Col>
                      
                    </Row>

                    <Row justify="center">
                        <Col span={24}>
                            {/* <p>
                            A prototype built for WinHacks 2020:the application is a website that allows users to connect to those around them through a news forum board. 
                            This board contains updates from the members of the community about their situations. Additionally, 
                            the user will be given the option to connect to a random community around the world. This will embark them on a journey through five communities 
                            to reach the sixth and final community. Within each community the user visits, they will be able to interact, through forums, with members of the community.

A community is defined as a high density cluster of users. Upon sign-up, the user will be assigned a community based upon their location.

                        </p> */}
                        </Col>
                    </Row>


                </div>
                

                <div className="library">
                    <Row justify="center">
                        <Col > <h3 className="pTitle">Library Study Room Booking Assistance </h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <h3 className="libraryTools">React,Redux,IBM Watson,Ant Design</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <img src={library} className="projectImg" /></Col>
                    </Row>

                    <Row justify="center">
                        <Col > <Button className="btn" type="link" href="https://github.com/varvind7/LibraryWindsor"> GitHub
                            <GithubOutlined/>
                            </Button>
                        </Col>
                      
                      
                    </Row>

                    <Row justify="center">
                        <Col span={24}>
                            {/* <p>
                            The purpose of this project is to focus on booking of group study rooms in the library to reduce ample of problems such as prior 
                            knowledge of how many rooms are booked for group study so that we don’t need to physically go to the library. So when a student wants to book a room, 
                            he/she can just look it up on the website if any rooms are currently available and proceed to book the rooms. The application aims to provide an automated way of booking rooms in the library over
                             the web platform and maintains the feedback given by the students and analyzes the reviews given by them which then is acted upon if required so. 

                        </p> */}
                        </Col>
                    </Row>


                </div>
                

                <div className="hospital" id="hospital">
                    <Row justify="center">
                        <Col > <h3 className="hospTitle">Hospital Appointment Booking portal </h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <h3 className="hospitalTools">HTML,CSS,JavaScript,Servelet,JSP,MYSQL</h3></Col>
                    </Row>
                    <Row justify="center">
                        <Col > <img src={hospital} className="projectImg" /></Col>
                    </Row>

                    <Row justify="center">
                        <Col > <Button className="btn" type="link" href="https://github.com/varvind7/HospitalPortal"> GitHub
                            <GithubOutlined/>
                            </Button>
                        </Col>
                      
                      
                    </Row>

                    <Row justify="center">
                        <Col span={24}>
                            {/* <p>
                            A doctor patient handling, managing system that helps doctors in their work and also patients to book doctor appointments
                             and view medical progress. The system allows doctors to manage their booking slots online. Patients are allowed to book 
                             empty slots online and those slots are reserved in their name. The system manages the appointment data for multiple doctors for various
                              date and times. Each time a user visits a doctor his/her medical entry is stored in the database by doctor. Next time a user logs in he may view his/her entire medical
                               history as and when needed. At the same time a doctor may view patients medical history even bore the patient visits him. This allows for an 
                               automated patient doctor handling system through an online interface. Our system also consists of organ donor module. This module allows for organ donation registration as well as organ search. 
                            The module is designed to help urgent organ requirements through easy/instant searches.

                        </p> */}
                        </Col>
                    </Row>


                </div>
            </div>
        </div>
    );
}

export default projects;