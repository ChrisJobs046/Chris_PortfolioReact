import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>technological institute of the americas Itla</h3>
              <p className="info">Software development  <span>•</span> <em className="date">August 2018 | December 2021</em></p>
              <p>
                I study software development at the technological institute of the americas, 
                in which I have prepared to participate in all phases of software development, 
                both from its analysis and audit to its implementation in cloud services.
              </p>
            </div>
          </div> {/* item end */}
          {/*<div className="row item">
            <div className="twelve columns">
              <h3>School of Cool Designers</h3>
              <p className="info">B.A. Degree in Graphic Design <span>•</span> <em className="date">March 2003</em></p>
              <p>
                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>
          I have focused especially on programming with various microsoft technologies such as
          C #, Asp.net core, Dapper, Azure etc. But I am currently a Full Stack programmer and 
          I am very interested in all types of projects, whether Frontend or Backend.
          </p>
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand photoshop" /><em>C#</em></li>
              <li><span className="bar-expand photoshop" /><em>Asp.net core</em></li>
              <li><span className="bar-expand illustrator" /><em>Javascript</em></li>
              <li><span className="bar-expand wordpress" /><em>React</em></li>
              <li><span className="bar-expand css" /><em>Analisis</em></li>
              <li><span className="bar-expand html5" /><em>Web Api</em></li>
              <li><span className="bar-expand jquery" /><em>Python</em></li>
              <li><span className="bar-expand wordpress" /><em>Sql Server</em></li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}
