import React from 'react';
import './landingImg.css';
import pdf from '../../assets/resume.pdf';
const LandingImg = () => {
    return (


        <div id="home" className="mainLandDiv">
            <div className="landingImg">
                <h1 className="introText">Hello, I'm <h1 className="name">Arvind Narayan Srinivasan</h1></h1>
                <div>
                    <a className="resumeLink"  target="_blank" href={pdf}>My Resume</a>
                </div>

            </div>


        </div>

    );
};
export default LandingImg;