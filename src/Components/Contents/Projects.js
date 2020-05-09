import React from 'react';
import './Projects.css';
import { Row, Col, Button, Modal } from 'antd';
import { GithubOutlined, EyeFilled, ExportOutlined, InfoCircleOutlined } from '@ant-design/icons';
import MyBurger from '../../assets/MyBurger.JPG';
import winhacks from '../../assets/winhacks.JPG';
import library from '../../assets/library.JPG';
import hospital from '../../assets/hospital.JPG'


class Projects extends React.Component {

    state = {
        visibleBurger: false,
        visibleWinhacks: false,
        visibleLibrary: false,
        visibleHospital: false,

    };

    showModalBurger = () => {
        this.setState({
            visibleBurger: true,
        });
    };


    handleOkBurger = e => {
        console.log(e);
        this.setState({
            visibleBurger: false,
        });
    };

    showModalWinhacks = () => {
        this.setState({
            visibleWinhacks: true,
        });
    };


    handleOkWinhacks = e => {
        console.log(e);
        this.setState({
            visibleWinhacks: false,
        });
    };

    showModalLibrary = () => {
        this.setState({
            visibleLibrary: true,
        });
    };


    handleOkLibrary = e => {
        console.log(e);
        this.setState({
            visibleLibrary: false,
        });
    };

    showModalHospital = () => {
        this.setState({
            visibleHospital: true,
        });
    };


    handleOkHospital = e => {
        console.log(e);
        this.setState({
            visibleHospital: false,
        });
    };
    render() {


        return (
            <div id="project" className="about">


                <div className="projects">

                    <div className="burger">

                        <Row justify="center">
                            <Col className="skilltools" lg={12} xs={24}>
                                <Row justify="center">
                                    <Col>
                                        <h3 className="pTitle">MyBurger</h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>

                                        <h3 className="pTools">React,Redux,FireBase</h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>
                                        <Button className="btn" type="link" href="https://github.com/varvind7/BurgerBuilderReact"> GitHub
                            <GithubOutlined />
                                        </Button>
                                    </Col>
                                    <Col>

                                        <Button className="btn" type="link" href="https://react-my-burger-d91f2.web.app/"> Demo
                        <EyeFilled />
                                        </Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>

                                        <div>
                                            <br />
                                            <Button className="btnAbout" type="primary" onClick={this.showModalBurger}>
                                                <InfoCircleOutlined /> About
                                            </Button>
                                            <Modal
                                                title="MyBurger"
                                                visible={this.state.visibleBurger}
                                                onOk={this.handleOkBurger}
                                                closable={false}
                                                footer={[
                                                    <Button key="Ok" onClick={this.handleOkBurger}>
                                                        Return
                                                    </Button>,

                                                ]}
                                            >
                                                <p>
                                                    A complete React project developed through online tutorials in order to learn React and its other functionalities such as
                                                    React components,state management, React hooks,Routing,React-Redux. The project is supported by Firebase backend.

                                                </p>
                                            </Modal>
                                        </div>

                                    </Col>
                                </Row>




                            </Col>
                            <Col lg={12} xs={24} > <img alt="Burger" src={MyBurger} className="projectImg burgerImg" /></Col>
                        </Row>



                    </div>

                    <div className="winhacks">
                        <Row justify="center">

                            <Col lg={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}  ><div className="winhacksImg">
                                <img alt="WinHacks" src={winhacks} className="projectImg" />
                            </div> </Col>

                            <Col className="skilltools" lg={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
                                <Row justify="center">
                                    <Col>
                                        <h3 className="pTitle">Lost In The Seperation (WinHacks 2020)</h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>

                                        <Col > <h3 className="pTools">React,Redux,FireBase,NodeJS</h3></Col>
                                    </Col>
                                </Row>
                                <Row justify="center">



                                    <Col > <Button className="btn" type="link" href="https://github.com/varvind7/Winhacks2020"> GitHub
                            <GithubOutlined />
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
                                <Row>
                                    <Col>

                                        <div>
                                            <br />
                                            <Button className="btnAbout" type="primary" onClick={this.showModalWinhacks}>
                                                <InfoCircleOutlined /> About
                                            </Button>
                                            <Modal
                                                title="WinHacks 2020"
                                                visible={this.state.visibleWinhacks}
                                                onOk={this.handleOkWinhacks}
                                                closable={false}
                                                footer={[
                                                    <Button key="Ok" onClick={this.handleOkWinhacks}>
                                                        Return
                                                    </Button>,

                                                ]}
                                            >
                                                <p>
                                                    A prototype built for WinHacks 2020:the application is a website that allows users to connect to those around them through a news forum board.
                                                    This board contains updates from the members of the community about their situations. Additionally,
                                                    the user will be given the option to connect to a random community around the world. This will embark them on a journey through five communities
                                                    to reach the sixth and final community. Within each community the user visits, they will be able to interact, through forums, with members of the community.

                                                    A community is defined as a high density cluster of users. Upon sign-up, the user will be assigned a community based upon their location.

                        </p>
                                            </Modal>
                                        </div>

                                    </Col>
                                </Row>



                            </Col >
                        </Row>





                    </div>




                    <div className="library">
                        <Row justify="center">
                            <Col className="skilltools" lg={12} xs={24}>
                                <Row justify="center">
                                    <Col>
                                        <h3 className="pTitle">Library Study Room Booking Assistance </h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>

                                        <h3 className="pTools">&emsp;&emsp;React,Redux
                    {<br />}IBM Watson,Ant Design</h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col > <Button className="btn" type="link" href="https://github.com/varvind7/LibraryWindsor"> GitHub
                            <GithubOutlined />
                                    </Button>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col>

                                        <div>
                                            <br />
                                            <Button className="btnAbout" type="primary" onClick={this.showModalLibrary}>
                                                <InfoCircleOutlined /> About
                                            </Button>
                                            <Modal
                                                title="Library"
                                                visible={this.state.visibleLibrary}
                                                onOk={this.handleOkLibrary}
                                                closable={false}
                                                footer={[
                                                    <Button key="Ok" onClick={this.handleOkLibrary}>
                                                        Return
                                                    </Button>,

                                                ]}
                                            >
                                                <p>
                                                    The purpose of this project is to focus on booking of group study rooms in the library to reduce ample of problems such as prior
                                                    knowledge of how many rooms are booked for group study so that we don’t need to physically go to the library. So when a student wants to book a room,
                                                    he/she can just look it up on the website if any rooms are currently available and proceed to book the rooms. The application aims to provide an automated way of booking rooms in the library over
                                                    the web platform and maintains the feedback given by the students and analyzes the reviews given by them which then is acted upon if required so.

                        </p>
                                            </Modal>
                                        </div>

                                    </Col>
                                </Row>



                            </Col>
                            <Col lg={12} xs={24} > <img alt="Library" src={library} className="projectImg" /></Col>
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



                    <div className="hospital">
                        <Row justify="center">

                            <Col lg={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }} ><div className="winhacksImg">
                                <img alt="Hospital" src={hospital} className="projectImg" />
                            </div> </Col>
                            <Col className="skilltools" lg={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
                                <Row justify="center">
                                    <Col>
                                        <h3 className="pTitle">Hospital Appointment Booking portal </h3>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>

                                        <h3 className="pTools">HTML,CSS,JavaScript
                    {<br />}Servelet,JSP,MYSQL</h3>
                                    </Col>
                                </Row>
                                <Row justify="center">

                                    <Col > <Button className="btn" type="link" href="https://github.com/varvind7/HospitalPortal"> GitHub
                            <GithubOutlined />
                                    </Button>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col>

                                        <div>
                                            <br />
                                            <Button className="btnAbout" onClick={this.showModalHospital}>
                                                <InfoCircleOutlined /> About
                                            </Button>
                                            <Modal
                                                title="Hospital"
                                                visible={this.state.visibleHospital}
                                                onOk={this.handleOkHospital}
                                                closable={false}
                                                footer={[
                                                    <Button key="Ok" onClick={this.handleOkHospital}>
                                                        Return
                                                    </Button>,

                                                ]}
                                            >
                                                <p>
                                                    A doctor patient handling, managing system that helps doctors in their work and also patients to book doctor appointments
                                                    and view medical progress. The system allows doctors to manage their booking slots online. Patients are allowed to book
                                                    empty slots online and those slots are reserved in their name. The system manages the appointment data for multiple doctors for various
                                                    date and times. Each time a user visits a doctor his/her medical entry is stored in the database by doctor. Next time a user logs in he may view his/her entire medical
                                                    history as and when needed. At the same time a doctor may view patients medical history even bore the patient visits him. This allows for an
                                                    automated patient doctor handling system through an online interface. Our system also consists of organ donor module. This module allows for organ donation registration as well as organ search.
                                                    The module is designed to help urgent organ requirements through easy/instant searches.

                        </p>
                                            </Modal>
                                        </div>

                                    </Col>
                                </Row>





                            </Col >

                        </Row>


                    </div>






                </div>
            </div>
        );
    }
}

export default Projects;