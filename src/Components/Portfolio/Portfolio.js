import React, { Component } from "react";
import "./Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>
            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-01'>
                    <img alt='' src='images/portfolio/juventud_solidaria.png' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Juventud Solidaria</h5>
                        <p>Web Developer</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-02'>
                    <img
                      alt=''
                      src='images/portfolio/Sales_Systen.png'
                    />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Sales system</h5>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-03'>
                    <img alt='' src='images/portfolio/blazor-logo.png'/>
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>BlazorSistemaFacturacion</h5>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-04'>
                    <img alt='' src='images/portfolio/react-1.svg' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Covid-19 Tracker</h5>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              {/*<div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-05'>
                    <img alt='' src='images/portfolio/farmerboy.jpg' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-06'>
                    <img alt='' src='images/portfolio/girl.jpg' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-07'>
                    <img alt='' src='images/portfolio/origami.jpg' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>
              <div className='columns portfolio-item'>
                <div className='item-wrap'>
                  <a href='#modal-08'>
                    <img alt='' src='images/portfolio/retrocam.jpg' />
                    <div className='overlay'>
                      <div className='portfolio-item-meta'>
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className='link-icon'>
                      <i className='icon-plus' />
                    </div>
                  </a>
                </div>
              </div>*/}
            </div> 
          </div>
          <div id='modal-01' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-Juventud_Solidaria.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Juventud Solidaria</h4>
              <p>
                Website for donations due to the Covid-19 pandemic, created to
                make donations to families left homeless by the pandemic.{" "}
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Web developer
              </span>
            </div>
            <div className='link-box'>
              <a href='https://chrisjobs046.github.io/D_JS/'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-02' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-Sales_Systen.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Sales System</h4>
              <p>
                Sales system that allows you to see the customer, the products,
                as well as the sales. It is made in the following technologies:
                React and bootstrap on the client side and Asp.net core on the
                server side.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Frontend Developer
              </span>
            </div>
            <div className='link-box'>
              <a href='https://wayn3r.github.io/IISProyectoFinal/'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-03' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-BlazorFacturacion.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>BlazorSistemaFacturacion</h4>
              <p>
              Web billing system made in blazor on the server side, 
              it has integrated authentication and authorization of users,
              maps of the businesses added to the system as well as a list of products, materials, 
              clients and services.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Full Stack Developer
              </span>
            </div>
            <div className='link-box'>
              <a href='http://rchris046-001-site1.dtempurl.com/'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-04' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-React_Tracker.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Covid-19 Tracker</h4>
              <p>
              It is an application made in reacts and axios in which material-ui components are used to show statistics 
              of the state in which the countries affected by the covid, the infected, recovered and the dead are located. 
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Web Developer
              </span>
            </div>
            <div className='link-box'>
              <a href='https://modest-haibt-fb73e9.netlify.app/'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-05' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-farmerboy.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Farmer Boy</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Webdesign
              </span>
            </div>
            <div className='link-box'>
              <a href='http://www.behance.net'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-06' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-girl.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Girl</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Photography
              </span>
            </div>
            <div className='link-box'>
              <a href='http://www.behance.net'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-07' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-origami.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Origami</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Branding, Illustration
              </span>
            </div>
            <div className='link-box'>
              <a href='http://www.behance.net'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
          <div id='modal-08' className='popup-modal mfp-hide'>
            <img
              className='scale-with-grid'
              src='images/portfolio/modals/m-retrocam.jpg'
              alt=''
            />
            <div className='description-box'>
              <h4>Retrocam</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className='categories'>
                <i className='fa fa-tag' />
                Webdesign, Photography
              </span>
            </div>
            <div className='link-box'>
              <a href='http://www.behance.net'>Details</a>
              <a href={() => false} className='popup-modal-dismiss'>
                Close
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
