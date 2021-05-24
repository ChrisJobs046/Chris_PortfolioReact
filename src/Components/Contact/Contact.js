import React, { Component } from "react";

const ENDPOINT = "https://getform.io/f/3a832f42-39d5-45b8-93c8-e5d5c933c910";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      email: "",
      name: "",
    };
    this.handleSavedData = this.handleSavedData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    Array.from(document.querySelector("input")).forEach(
      (value) => (value.value = ""),
    );
  }

  handleSavedData(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { message, email, name } = this.state;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    await fetch(ENDPOINT, { method: "POST", body: formData }).then(() => {
        this.clearInput();
      });
  }

  render() {
    return (
      <section id='contact'>
        <div className='row section-head'>
          <div className='two columns header-col'>
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className='ten columns'>
            <p className='lead'>
              I must explain to you how this whole misconception of
              denouncing pleasure and praising pain was born, a complete account
              of the system, and exposing the real teachings of the great
              explorer of truth and will develop into the master builder of
              human happiness. No pleasure because it is painful or avoids
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='eight columns'>
            {/* form */}
            <form
              onSubmit={this.handleSubmit}
              id='contactForm'
              name='contactForm'
            >
              <fieldset>
                <div>
                  <label htmlFor='contactName'>
                    Name <span className='required'>*</span>
                  </label>
                  <input
                    type='text'
                    required
                    size={35}
                    id='contactName'
                    name='contactName'
                    onChange={(e) =>
                      this.handleSavedData("name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor='contactEmail'>
                    Email <span className='required'>*</span>
                  </label>
                  <input
                    type='email'
                    required
                    size={35}
                    id='contactEmail'
                    name='contactEmail'
                    onChange={(e) =>
                      this.handleSavedData("email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor='contactMessage'>
                    Message <span className='required'>*</span>
                  </label>
                  <textarea
                    cols={50}
                    required
                    rows={15}
                    id='contactMessage'
                    name='contactMessage'
                    onChange={(e) =>
                      this.handleSavedData("message", e.target.value)
                    }
                  />
                </div>
                <div>
                  <button className='submit'>Submit</button>
                  {/* <span id='image-loader'>
                    <img alt='' src='images/loader.gif' />
                  </span> */}
                </div>
              </fieldset>
            </form>{" "}
            {/* Form End */}
            {/* contact-warning */}
            <div id='message-warning'> Error boy</div>
            {/* contact-success */}
            <div id='message-success'>
              <i className='fa fa-check' />
              Your message was sent, thank you!
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
