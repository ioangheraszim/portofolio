import React from 'react'
import "./Skills.scss";

// import for icons will fix later for data import
import htmlImg from "/src/assets/images/html.svg"
import cssImg from "/src/assets/images/css.svg"
import tailwindImg from "/src/assets/images/tailwind.svg"
import sassImg from "/src/assets/images/sass.svg"
import reactImg from "/src/assets/images/react.svg"
import javascriptImg from "/src/assets/images/javascript.svg"
import gitImg from "/src/assets/images/git.svg"


function Skills() {
  return (
    <section id="skills" className='container skills-section '>
      <div className='divider'>
      </div>
      <div className='contents'>
        <h2 className='section-title'>Skills</h2>
        <ul className='skills-set'>
            <li className='skill-item'>
              <img src={htmlImg} alt="" />
              <p>HTML</p>              
            </li>
            <li className='skill-item'>
            <img src={cssImg} alt="" />
              <p>CSS</p>              
            </li>
            <li className='skill-item'>
            <img src={sassImg} alt="" />
              <p>SCSS</p>              
            </li>
            <li className='skill-item'>
            <img src={tailwindImg} alt="" />
              <p>Tailwind</p>              
            </li>
            <li className='skill-item'>
            <img src={reactImg} alt="" />
              <p>React Js</p>              
            </li>
            <li className='skill-item'>
            <img src={javascriptImg} alt="" />
              <p>JavaScript</p>              
            </li>
            <li className='skill-item'>
            <img src={gitImg} alt="" />
              <p>Git</p>              
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills