import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/juventud_solidaria.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Juventud Solidaria</h5>
                        <p>Web Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/Sales_Systen.jpg" width="600" height="400" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Sales system</h5>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Judah</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Into The Light</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/girl.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
            </div> 
          </div> 
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-juventud_solidaria.png" alt="" />
            <div className="description-box">
              <h4>Juventud Solidaria</h4>
              <p>Website for donations due to the Covid-19 pandemic, created to make donations to families left homeless by the pandemic. </p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdeveloper</span>
            </div>
            <div className="link-box">
              <a href="http://juventudsolidariard.org/">Details</a>
              <a href={() => false}  className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-Sales_Systen.jpg" alt="" />
            <div className="description-box">
              <h4>Sales System</h4>
              <p>Sales system that allows you to see the customer, the products, as well as the sales. It is made in the following technologies: React and bootstrap on the client side and Asp.net core on the server side.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Frontend Developer</span>
            </div>
            <div className="link-box">
              <a href="https://wayn3r.github.io/IISProyectoFinal/">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
            <div className="description-box">
              <h4>Judah</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
            <div className="description-box">
              <h4>Into the Light</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
            <div className="description-box">
              <h4>Farmer Boy</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
            <div className="description-box">
              <h4>Girl</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
            <div className="description-box">
              <h4>Origami</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a href={() => false} className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div> 
      </section>
    )
  }
}