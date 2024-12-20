import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "/src/assets/images/logo22.svg"

function Footer() {
  return (
    <footer>
      <div className="container my-footer">
        <div className="left-side">
          <a  href="#" className="logo-container">
            <img src={logo} alt="mister e one logo icon" />
            <p className="logo">Mr<span>Eone</span></p>
          </a>
          <p className="email">Email: <span><a href="mailto:ioan.gheraszim@gmail.com">ioan.gheraszim@gmail.com</a></span></p>
          <div className="social-icons">
              <a className="github" href=""><FontAwesomeIcon icon={faGithub}/></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
        <div className="middle">
          <h2>Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="right-side">
          <h2>Copyright</h2>
          <p>@MrEone 2025.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
