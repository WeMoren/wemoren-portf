import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <h4>{project.tech}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
