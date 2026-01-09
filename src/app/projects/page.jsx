import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ project }) => {
  const featuredProjects = [
    {
      id: 1,
      image: "/portf-img.png",
      title: "Portfolio Website",
      tech: "Next.js, CSS",
      description: "My dev portfolio...",
      visit: "/",
    },
    {
      id: 2,
      title: "Movie App",
      tech: "React, TMDB API",
      description: "Movie discovery app",
      visit: "https://movie-library-pw5z.vercel.app",
    },
    {
      id: 3,
      title: "Countdown Timer",
      tech: "React, CSS",
      description: "Time management app",
      visit: "https://countdown-timer-eosin-seven.vercel.app",
    },

    {
      id: 4,
      title: "Music Player",
      tech: "Javascript, JSON, CSS",
      description: " Mini, Play, pause, shuffle...",
    },

    {
      id: 5,
      title: "Ecommerce App",
      tech: "Javascript, JSON, CSS",
      description: "Add to cart, checkout...",
    },
  ];

  return (
    <div>
      <main>
        <section className="container">
          <h2>My Projects</h2>

          <div className="project-container">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
