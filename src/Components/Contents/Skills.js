import React from 'react';
import { Row, Col, Card,Avatar,Divider } from 'antd';
import './Skills.css';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';
import express from '../../assets/expressjs.png';
import javascript from '../../assets/javascript.png';
import redux from '../../assets/redux.png';
import java from '../../assets/java.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import cpp from '../../assets/cpp.jfif';
import mongo from '../../assets/mongo.png';
import mysql from '../../assets/mysql.png';
import vs from '../../assets/vscode.jfif';
import antd from '../../assets/antd.jfif';
import bootstrap from '../../assets/bootstrap.png';
import npm from '../../assets/npm.png';
import git from '../../assets/git.png';

const skill = () => {

    
    return(
        <div id="skills" className="main"> 
              <Divider orientation="center"><h2 className="headSkills">My Skills</h2></Divider>
                
            
            <Row justify="center">
                    <Col>
                    <h3>Platforms / Languages / Technologies / Frameworks / Tools</h3>
                    </Col>
                </Row>

            <div className="site-card-wrapper">
                
    <Row gutter={16}>
      <Col className="col" xs={24} lg={6}>
        <Card hoverable={true} >
         <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={react}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>React</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={nodejs}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>NodeJS</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={express}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>ExpressJS</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Beginner</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
      <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={javascript}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito',fontSize:'19px'}}>JavaScript ES6+</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
    </Row>
    
   
{/* 
        next row */}

    <Row gutter={16}>
      <Col className="col" xs={24} lg={6}>
        <Card hoverable={true} >
         <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={redux}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>Redux</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={java}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>Java</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={html}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>HTML 5</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
      <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={css}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito',fontSize:'19px'}}>CSS 3</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
    </Row>

    {/* next row */}

    <Row gutter={16}>
      <Col className="col" xs={24} lg={6}>
        <Card hoverable={true} >
         <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={cpp}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>C/C++</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={mongo}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>MongoDB</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={mysql}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>MYSQL</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
      <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={vs}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito',fontSize:'19px'}}>VS Code</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
    </Row>
    {/* new row */}

    <Row gutter={16}>
      <Col className="col" xs={24} lg={6}>
        <Card hoverable={true} >
         <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={bootstrap}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>Bootstrap</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={antd}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>AntD</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
          <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={git}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito'}}>GIT</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Intermediate</p>
                <br/>
                
             </Col>
         </Row>
        </Card>
      </Col>
      <Col className="col" xs={24} lg={6}>
      <Card hoverable={true} >
          <Row justify='center'>
             <Col span={12} >
               <Avatar size={70} src={npm}/>
             </Col>
             <Col span={12} >
               <h2 style={{fontFamily:'Nunito',fontSize:'19px'}}>NPM</h2> 
                
                <p style={{fontWeight:'700',fontFamily:'Nunito'}}> Skill Level: Advanced</p>
                <br/>
             </Col>
         </Row>
        </Card>
      </Col>
    </Row>
  </div>
        </div>
    );
}
export default skill;