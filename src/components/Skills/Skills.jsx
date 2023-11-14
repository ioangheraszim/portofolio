import React from "react";
import "./Skills.scss";

import { skillsData } from "../data/data";

function Skills() {
  return (
    <section id="skills" className="container skills-section ">
      <div className="divider"></div>
      <div className="contents">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-set">
          {skillsData.map((skill) => (
            <li key={skill.id} className="skill-item">
              <img src={skill.image} alt={`${skill.title} Logo`} />
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
