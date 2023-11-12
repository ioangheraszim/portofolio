import React from "react";
import "../Projects/Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

function ProjectItems({image, title, tech, code, live, description }) {
  const { ref, inView } = useInView();
  const { ref: projectRef, inView: projectInView, } = useInView({
  
  });

  return (

      <div  ref={projectRef} className={`project ${projectInView ? "active" : ""}`}>
        <img src={image} alt={title} />
        <div className="info">
          <h2 className="project-title">{title}</h2>
          <div className="tech-stack">
            <p>{tech[0]}</p>
            <p className="secondary">{tech[1]}</p>
          </div>
          <p>{description}</p>
          <div className="the-btns">
            <a target="_blank" className="code" href={code}>
              <span className="span">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              Code
            </a>
            <a target="_blank" className="live" href={live}>
              <span className="span">
                <FontAwesomeIcon icon={faDisplay} />
              </span>
              Live
            </a>
          </div>
        </div>
      </div>
  );
}

export default ProjectItems;
