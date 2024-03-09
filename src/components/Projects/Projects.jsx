import React from "react";
import "./Projects.scss";

import { projectData } from "../data/data";
import ProjectItems from "../ProjectItems/ProjectItems";

function Projects({title}) {
  return (
      <section className="container projects" id="projects">
        <div className="wrapper">
          <h2 className="section-title">{title}</h2>
          {projectData.map((project) => (    
            <ProjectItems key={project.id} {...project}/>
          ))}
        </div>
      </section>
  );
}

export default Projects;
