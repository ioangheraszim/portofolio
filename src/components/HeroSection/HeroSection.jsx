import React from "react";
import myVideo from "/src/assets/video/lofiboy.mp4";
import "./HeroSection.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
function HeroSection() {
  return (
    <>
    <section className="container hero">
        <div className="the-video">
            <video className="video" controls={false} autoPlay loop muted src={myVideo}></video>
            <div className="container content">  
                <h1 className="header-title">Nice to meet you! I'm <span className="accentuate">Ioan Gheraszim</span>.</h1>
                <p className="abouts">
                    Based in the UK, I'm a front-end developer and Computer Science
                    graduate from the University of Bedfordshire, passionate about
                    creating user-friendly websites and turning creative ideas into
                    reality.
                </p>
                <div className="cta-btns">
                    <button className="cta-btn btn-resume">Resume <FontAwesomeIcon icon={faFileArrowDown} /></button>
                    <button className="cta-btn btn-contact">Contact me</button>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default HeroSection;
