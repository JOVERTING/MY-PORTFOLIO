import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import resume from "./images/resume.jpg";
import certificate from "./images/certificate.jpg";
import ncii from "./images/ncii.jpg";
import webdesign from "./images/webdesign.jpg";
import webdesign1 from "./images/webdesign1.jpg";
import login from "./images/login.jpg";
import homepage from "./images/homepage.jpg";
import prototype from "./images/prototype.jpg";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Hi there!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certificates">
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* First Section */}
      <div id="home" className="section">
        <h1>&lt;Hello World /&gt;</h1>
        <h2>I'm John Jovert Lariosa, an Information Technology Student</h2>
        <h2>from the University of Mindanao.</h2>
        <div className="social-icons">
          <a href="mailto:j.lariosa.511377@umindanao.edu.ph" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/jonhjovertlariosa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      {/* Second Section: Resume */}
      <div id="resume" className="section resume-section">
        <h2>Resume</h2>
        <img src={resume} alt="John Jovert Lariosa's Resume" />
        <div className="resume-buttons">
          <a
            href="https://drive.google.com/file/d/1LfmO5rj7hihvmfb6xnSJ1AvK4mGtvND9/view?usp=sharing"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1LfmO5rj7hihvmfb6xnSJ1AvK4mGtvND9"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      

      {/* Fourth Section: Certificates */}
      <div id="certificates" className="section certificates">
        <h2>Certificates</h2>
        <div className="certificate">
          <img src={certificate} alt="Certificate" />
          <div className="caption">
            <div className="title">Certificate</div>
            <div>
              This Certificate of Appreciation is specify for Completed project
            </div>
          </div>
        </div>

        <div className="certificate">
          <img src={ncii} alt="NCII Certificate" />
          <div className="caption">
            <div className="title">National Certificate II</div>
            <div>
              This certification verifies competency in a specific vocational skill.
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section: Projects */}
      <div id="projects" className="section projects">
        <h2>Ongoing and Completed Projects</h2>
        <div className="project">
          <img src={webdesign} alt="Web Design Project" />
          <div className="content">
            <div className="title">Web Design</div>
            <div className="caption">
              A modern responsive web design using Figma for prototyping.
            </div>
            <div className="icons">
              <i className="fab fa-figma"></i>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>

        <div className="project">
          <img src={webdesign1} alt="Web Design Iteration" />
          <div className="content">
            <div className="title">Web Design Iteration</div>
            <div className="caption">
              A refined version of the initial web design project.
            </div>
            <div className="icons">
              <i className="fab fa-figma"></i>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>

        <div className="project">
          <img src={login} alt="Login Page Design" />
          <div className="content">
            <div className="title">Login Page</div>
            <div className="caption">
              A secure and user-friendly login page design.
            </div>
            <div className="icons">
              <i className="fab fa-figma"></i>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>

        <div className="project">
          <img src={homepage} alt="Homepage Design" />
          <div className="content">
            <div className="title">Homepage</div>
            <div className="caption">
              A dynamic and engaging homepage layout.
            </div>
            <div className="icons">
              <i className="fab fa-figma"></i>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section contact-me">
        <h2>Contact Me</h2>
        <div className="social-icons">
          <a href="mailto:j.lariosa.511377@umindanao.edu.ph" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/jonhjovertlariosa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;