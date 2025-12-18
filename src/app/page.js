"use client";

import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import page from "./contact/page";
import AboutMe from "./components/AboutMe";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      tech: "Next.js, CSS",
      description: "My dev portfolio showcasing...",
    },
    {
      id: 2,
      title: "Movie App",
      tech: "React, TMDB API",
      description: "Movie discovery app",
    },
    //     {
    //       id: 3,
    //       title: "Countdown Timer",
    //       tech: "React, CSS",
    //       description: "Time management app",
    //     },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient">
        <h1 className="name">Hi, I&apos;m Uwem Umoren (WeMoren)</h1>
        <p className="tech-role">
          Frontend Developer | React & Next.js Enthusiast
        </p>
        <a href="/projects" className="brand-button">
          See My Work
        </a>
      </section>

      {/* Skills / Tech Stack */}
      <section className="container">
        <h2>Skills & Tech Stack</h2>
        <div className="skills">
          {[
            "React",
            "Next.js",
            "D3.js",
            "JavaScript",
            "Fetch APIs",
            "REST APIs",
            "Tailwindcss",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span className="techs" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container">
        <h2>Featured Projects</h2>
        <div className="project-container">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <Link
            href="/projects"
            className="brand-button"
            style={{ marginTop: 20 }}
          >
            View More &rarr;
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="hero-gradient"
        style={{ marginTop: "2rem", padding: "2rem" }}
      >
        <h2
          style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}
        >
          Let&apos;s Build Something Together
        </h2>
        <a href="/contact" className="brand-button" target="_blank">
          Contact Me
        </a>
      </section>
    </main>
  );
}
