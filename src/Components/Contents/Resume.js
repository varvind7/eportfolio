import React, { Component } from 'react';
import pdf from '../../assets/resume.pdf';

 
class Resume extends Component {
  
 
  render() {
   
 
    return (
      <div>
        <a style={{display: "table-cell"}} target="_blank" href={pdf}>Click here for my pdf</a>
      </div>
    );
  }
}
export default Resume;