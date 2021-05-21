import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I am {resumeData.name}.</h1>
        <h3>I'm a Barcelona based <span>Frontend developer</span> creating awesome Web and Mobile App's with <span>React and React Native</span>. 
        Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
        <hr />
        <ul className="social">
          <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/vandaLbd"><i className="fa fa-twitter" /></a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leonardo-badilla-daza-427464144/"><i className="fa fa-linkedin" /></a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/vandal777"><i className="fa fa-github" /></a></li>
        </ul>
      </div>
    </div>
    );
  }
}