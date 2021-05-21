import React, { Component } from "react";
import "./Experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div className='wrapper container'>
        <section
          id='experiences-section'
          className='experiences-section section'
        >
          <h2 className='section-title'>Work Experiences</h2>

          <div className='timeline'>
            {/*Kayak*/}
            <br></br>
            <div className='item'>
              <div className='work-place'>
                <h3 className='place'>
                  Sales System
                  <small>(Frontend Developer)</small>
                </h3>
                <div className='location'>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  Santo Domingo, Republica Dominicana
                </div>
              </div>
              <div className='job-meta'>
                <div className='title'>Wev Developer </div>
                <div className='time'>April 2021</div>
              </div>
              {/*//job-meta*/}
              <div className='job-desc'>
                <p>
                  <b>Technologies:</b>
                  <br />
                  React, React-Hook, React-bootstrap, JavaScript, Jira, Slack
                </p>
                <p>
                  <b>Responsibilities:</b>
                  <br />
                  Using the frontend technologies: react, react hook,
                  react-router-dom, create the view of a sales module for the
                  sales system in which Asp.net Web Api was used, as backend and
                  SqlServer as storage. the agile scrum framework, as well as
                  the Jira tool for project management and the slack tool for
                  team communication <br />
                </p>
              </div>
              {/*//job-desc*/}
            </div>
            {/*//lola*/}
            <div className='item'>
              <div className='work-place'>
                <h3 className='place'>
                  PCSD Parque Cibernetico
                  <small>(Team Lead)</small>
                </h3>
                <div className='location'>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  La Caleta, Republica Dominicana
                </div>
              </div>
              <div className='job-meta'>
                <div className='title'>Scrum Master</div>
                <div className='time'>September 2020 - December 2020</div>
              </div>
              {/*//job-meta*/}
              <div className='job-desc'>
                <p>
                  <b>Technologies:</b>
                  <br />
                  Meistertask.
                </p>
                <p>
                  <b>Responsibilities:</b>
                  <br />
                  In charge of managing processes of the scrum framework such
                  as:
                  <br />
                  user stories, attending and eliminating any inconvenience with
                  the <br />
                  project, facilitating daily meetings where sprint planning,
                  sprint <br />
                  Review and sprint retrospective were carried out .<br />
                </p>
                <div className='job-meta'>
                  <div className='title'>AR & VR Developer</div>
                  <div className='time'>September 2020 - December 2020</div>
                </div>
              </div>
              {/*//job-meta*/}
              <div className='job-desc'>
                <p>
                  <b>Technologies:</b>
                  <br />
                  C#, Unity, AR, VR, Virtual Reality, Augmented Reality, Blender
                </p>
                <p>
                  <b>Responsibilities:</b>
                  <br />
                  Development of different mobile applications of virtual and
                  augmented reality in C # Unity
                  <br />
                  making their corresponding models with the modeling software,
                  lighting, rendering, animation
                  <br />
                  and creation of three-dimensional graphics "Blender".
                  <br />
                </p>
              </div>
              {/*//job-desc*/}
            </div>
            {/*//Kayak*/}
            <div className='item'>
              <div className='work-place'>
                <h3 className='place'>
                  Student college
                  <small>(Full Stack Programmer)</small>
                </h3>
                <div className='location'>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  Santo Domingo, Republica Dominicana
                </div>
              </div>
              <div className='job-meta'>
                <div className='title'>Full Stack Developer </div>
                <div className='time'>June 2020</div>
              </div>
              {/*//job-meta*/}
              <div className='job-desc'>
                <p>
                  <b>Technologies:</b>
                  <br />
                  Asp.net Core, bootstrap, SQL Server, SQLite, Identity.
                </p>
                <p>
                  <b>Client: </b> Local college of students
                </p>
                <p>
                  <b>Responsibilities:</b>
                  <br />
                  Using asp .net core and bootstrap technologies, a system was
                  created to manage students in which databases such as SQL
                  Server and SQLite were used for data storage, asp.net core
                  methods such as Identity for authentication, verification and
                  login of the administration system users. <br />
                </p>
              </div>
              {/*//job-desc*/}
            </div>
            {/*//lola*/}
            <div className='item'>
              <div className='work-place'>
                <h3 className='place'>
                  Juventud Solidaria
                  <small>(Frontend Developer)</small>
                </h3>
                <div className='location'>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  Santo Domingo, Republica Dominicana
                </div>
              </div>
              <div className='job-meta'>
                <div className='title'>Web Developer</div>
                <div className='time'>March 2020 - April 2020</div>
              </div>
              {/*//job-meta*/}
              <div className='job-desc'>
                <p>
                  <b>Technologies:</b>
                  <br />
                  Html, Css, bootstrap, Javascript.
                </p>
                <p>
                  <b>Responsibilities:</b>
                  <br />
                  In charge of some frontend components, as well as one of the
                  collaborators when correcting design and style errors. .<br />
                </p>
              </div>
              {/*//job-desc*/}
            </div>
            {/*//item*/}
            {/*<div className="item">
                    <div className="work-place">
                    <h3 className="place">Cranberry Digital Marketing</h3>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true" />Lahore, Pakistan</div>
                    </div>
                    <div className="job-meta">
                    <div className="title">Software Engineer</div>
                    <div className="time">2012 - 2014</div>
                    </div>
                    <div className="job-desc">
                    <p><b>Technologies:</b><br />
                        Laravel, Zend Framework, Magento, Wordpress, Joomla, woo-commerce, Jquery, PHP, Html,
                        Javascript</p>
                    <p>
                        <b>Responsibilities:</b><br />
                        Developed scalable systems with Laravel and codeigniter frameworks.<br />
                        Developed the E-commerce solutions in Magneto.<br />
                        Provide the customized CMS solution in PHP.<br />
                        Blog base CMS in WordPress and Joomla.<br />
                        Developed single page application Used AngularJS and jQuery.<br />
                        Developed Jquery plugins for custom requirements.<br />
                        Used MySQL for data.<br />
                        Leveraged the open source modules i.e. Mailchimp for mailing service and
                        stripe for building payment system.
                    </p>
                    </div>
                </div>
                */}
          </div>
          {/*//timeline*/}
        </section>
      </div>
    );
  }
}
