import React from "react";
import "./ProjectCard.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const techs = project.tech.split(",");
  return (
    <div className="project-card">
      <div className="project-image">
        <Image
          src={project.image}
          alt="project image"
          fill
          sizes="(max-width: 768px) 100vw, 250px"
          className="project-img"
        />
      </div>
      <h2 className="project-title">{project.title}</h2>
      <div className="techs-container">
        {techs.map((tech, index) => (
          <span key={index} className="tech-pills">
            {tech.trim()}
          </span>
        ))}
      </div>
      <p className="project-description">{project.description}</p>
      <br />
      <a className="demo" target="_blank" href={project.visit}>
        Demo
      </a>
    </div>
  );
};

export default ProjectCard;
