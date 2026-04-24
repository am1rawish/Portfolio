import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";

const focusItems = [
  "Frontend development",
  "Responsive layouts",
  "Personal and school projects"
];

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

function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">Amira</a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#background">Background</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>Hi, I&apos;m Amira. I build clean, thoughtful websites and projects.</h1>
        <p className="hero-text">
          I&apos;m interested in creating digital work that feels simple, useful, and easy to understand.
          This is where I share what I&apos;m learning and building.
        </p>
        <div className="hero-actions">
          <a className="button primary-button" href="#projects">See projects</a>
          <a className="button secondary-button" href="#about">About me</a>
        </div>
      </div>

      <div className="hero-card" aria-label="Portfolio summary">
        <p className="card-label">Currently focused on</p>
        <ul>
          {focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="profile-picture" aria-label="Profile picture placeholder">
        <span>Profile picture</span>
      </div>
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
        <p>Update these links with your real email, GitHub, and LinkedIn when you are ready.</p>
      </div>
      <div className="contact-links">
        <a className="button primary-button" href="mailto:hello@example.com">Email</a>
        <a className="button secondary-button" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a className="button secondary-button" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
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
