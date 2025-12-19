import React from "react";
import "./ProjectCard.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const techs = project.tech.split(",");
  return (
    <div className="project-card">
      <Image src="/project.png" alt="project image" width={250} height={250} />
      <h2 className="project-title">{project.title}</h2>
      <div className="techs-container">
        {techs.map((tech, index) => (
          <span key={index} className="tech-pills">
            {tech.trim()}
          </span>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
