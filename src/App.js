import React, { Component } from "react";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import resumeData from "./resumeData";
import Cover from "./Components/cover/Cover";
import Experience from "./Components/Experience/Experience";
import Certification from "./Components/Certification/Certification";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Cover resumeData={resumeData} />
        {/*<Header resumeData={resumeData}/>*/}
        <About />
        <Resume />
        <Experience />
        <Certification />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
