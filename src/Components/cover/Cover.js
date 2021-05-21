import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <section id='home'>
      <div className='cover-container'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a href='#' className='mobile-btn' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Christopher Alexander </h1>
        <hr></hr>
        <p> Full Stack Developer | Game Developer🎮 | Studen | </p>
        <hr />
        <ul className='social'>
          <li>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://do.linkedin.com/in/chris-a-ram%C3%B3n-q-2275321b2'
            >
              <i className='fa fa-linkedin' />
            </a>
          </li>
          <li>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/ChrisJobs046'
            >
              <i className='fa fa-github' />
            </a>
          </li>
        </ul>
        <br />
        <br />
        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Cover;
