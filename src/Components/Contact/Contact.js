import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">But I must explain to you how this whole misconception of denouncing pleasure 
            and praising pain was born, a complete account of the system, and exposing the real teachings of the 
            great explorer of truth and will develop into the master builder of human happiness. No pleasure because it is 
            painful or avoids 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text"  size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text"  size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"  />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
              </p>
            </div>
            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
            </div>
          </aside>
        </div>
      </section>
    )
  }
}
