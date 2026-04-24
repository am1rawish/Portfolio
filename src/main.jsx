import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";

const projects = [
  {
    number: "01",
    type: "Website",
    title: "Personal Portfolio",
    description: "A simple responsive portfolio site created to introduce myself and showcase my projects.",
    link: "#top",
    label: "View Personal Portfolio project",
    action: "View project"
  },
  {
    number: "02",
    type: "App concept",
    title: "Project Placeholder",
    description: "Replace this card with a class assignment, personal build, design mockup, or coding project.",
    link: "#contact",
    label: "Ask about project placeholder",
    action: "Ask about this project"
  },
  {
    number: "03",
    type: "Coming soon",
    title: "Future Project",
    description: "Use this space for a project you are currently planning, improving, or preparing to publish.",
    link: "#contact",
    label: "Ask about future project",
    action: "Ask about this project"
  }
];

function About() {
  return (
    <section className="section about-section" id="about">
      <img
        className="profile-picture"
        src="/profile-placeholder.jpeg"
        alt="Pixel art profile placeholder"
      />
      <div className="section-copy">
        <p className="eyebrow">About me</p>
        <h2>Hi, I&apos;m Amira.</h2>
        <p>
          I&apos;m building a portfolio to share my projects, interests, and the work I&apos;m growing into.
        </p>
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="section background-section" id="background">
      <div>
        <p className="eyebrow">Background</p>
        <h2>My background</h2>
      </div>
      <div className="section-copy">
        <p>
          Add a short summary here about your school, program, experience, interests, or the path that led you to building projects.
        </p>
        <p>
          This is also a good place to mention the tools you are learning, the kind of work you enjoy, and what you want to explore next.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <span>{project.number}</span>
              <p>{project.type}</p>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} aria-label={project.label}>{project.action}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect.</h2>
        <p>Reach out by email or find me on GitHub and LinkedIn.</p>
      </div>
      <div className="contact-links">
        <a className="button primary-button" href="mailto:amirawish16@gmail.com">Email</a>
        <a className="button secondary-button" href="https://github.com/am1rawish" target="_blank" rel="noreferrer">GitHub</a>
        <a className="button secondary-button" href="https://www.linkedin.com/in/amira-wishah-6a57752bb/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <main id="top">
        <About />
        <Background />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© 2026 Amira. Built with React.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
