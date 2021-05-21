import React, { Component } from 'react'
import './Certification.css';

export default class Certification extends Component {

    render() {

        return(

            <div class="wrapper container">
                <section id="education-section" className="education-section section">
                <h2 className="section-title">Courses & Certification</h2>
                <div className="row">
                {/*item*/}
                <div className="item col-12 col-md-6">

                    <div className="item-inner">
                    
                    </div>
                    </div>{/*//item*/}
                    {/*item*/}
                    <div className="item col-12 col-md-6">
                        <div className="item-inner">
                        <div className="sub-title">
                    </div>{/*//education-body*/}
                    <div className="desc">
                        <b>Curso de Frontend Developer Platzi</b> <a target="_blank" href="https://platzi.com/p/rchris/curso/1640-frontend-developer/diploma/detalle/">
                        Certificate link
                        </a>
                        <br />
                        <b>PCSD Certified AR & VR Developer Lever 1</b>
                        <br />
                        <b>Curso Básico de JavaScript Platzi</b> <a target="_blank" href="https://platzi.com/p/rchris/curso/1814-basico-javascript/diploma/detalle/">
                        Certificate link
                        </a>
                        <br />
                        <b>Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero Udemy</b>
                        <br />
                    </div>
                    </div>
                </div>{/*//item*/}
                </div>{/*//row*/}
            </section>
            </div>

            
        )
    }
}