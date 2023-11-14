import React from "react";
import myVideo from "/src/assets/video/lofiboy.mp4";
import "./HeroSection.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { heroData } from "../data/data";
function HeroSection() {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="the-video">
                <video className="video" controls={false} autoPlay loop muted src={myVideo}></video>
                <div className="container content">
                    {heroData.map((hero) => (
                        <div key={hero.id}>
                            <h1 className="header-title">{hero.greet}<span className="accentuate"> {hero.name}</span>.</h1>
                            <p className="abouts">{hero.abouts}</p>
                            <div className="cta-btns">
                                <a href="src/components/document/IoanGheraszim.pdf" download="Ioan Gheraszim" className="cta-btn btn-resume">Resume <FontAwesomeIcon icon={faFileArrowDown} /></a>
                                <a href="#contact" className="cta-btn btn-contact">Contact me</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default HeroSection;
