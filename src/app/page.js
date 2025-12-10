"use client";

import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";
import page from "./contact/page";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      tech: "Next.js, CSS",
      description: "My dev portfolio showcasing my projects",
    },
    {
      id: 2,
      title: "Movie App",
      tech: "React, TMDB API",
      description: "Movie discovery app",
    },
    {
      id: 3,
      title: "Countdown Timer",
      tech: "React, CSS",
      description: "Time management app",
    },
  ];

  const latestBlogs = [
    {
      id: 1,
      title: "Learning Next.js 13",
      summary: "A beginner's journey into Next.js 13",
      slug: "learning-nextjs-13",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient">
        <h1
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Hi, I&apos;m Uwem Umoren | WeMoren
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
          Frontend Developer | React & Next.js Enthusiast
        </p>
        <a href="/projects" className="brand-button">
          See My Work
        </a>
      </section>

      {/* Featured Projects */}
      <section className="container">
        <h2>Featured Projects</h2>
        <div className="project-container">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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
            "APIs",
            "REST APIs",
            "Tailwindcss",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="container">
        <h2>Latest Blog Posts</h2>
        <div className="blog-container">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
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
