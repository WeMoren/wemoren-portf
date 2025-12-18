import React from "react";
import "./ProjectCard.css";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <Image
        src="/project.png"
        alt="project image"
        width={250}
        height={250}
      ></Image>
      <h2 className="project-title">{project.title}</h2>
      <h4 className="techs">{project.tech}</h4>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
