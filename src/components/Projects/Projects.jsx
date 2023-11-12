import React from "react";
import "./Projects.scss";

import projectsData from "../data/projectsData";
import ProjectItems from "../ProjectItems/ProjectItems";

function Projects() {
  return (
      <section className="container" id="projects">
        <div className="wrapper">
          <h2 className="section-title">Projects</h2>
          {projectsData.map((project) => (    
            <ProjectItems key={project.id} {...project}/>
          ))}
        </div>
      </section>
  );
}

export default Projects;
