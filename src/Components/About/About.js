import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          {/*<div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>*/}
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
            I am enthusiastic about learning new things, as well as new challenges, 
            I am a lover of all kinds of technology and I find it very interesting to explore space.
            
            I like everything that has to do with software development in all its cycles but the part that I like the most of all is the frontend,
            I am a Full Stack developer, in my free time I dedicate myself to learning new technologies from frontend, backend, cloud services etc. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Christopher Alexander Ramon Quezada</span><br />
                  <span>(829) 533-9331</span><br />
                  
                  <h4 style={{ color: "white" }} > Message</h4>
                  <span>In case you want to contact me please leave your: name, email and message in the contact section</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/16xOYlYXQ18wB4mDGKy93ZFqM5SDUsl2T/view?usp=sharing" target='_blank' rel="noopener noreferrer" without="true" className="button" download=""><i className="fa fa-download" />Download CV</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
