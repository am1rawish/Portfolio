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
    action: "Ask about this project",
    githubLabel: "View Future Project GitHub repository"
  },
  {
    number: "04",
    type: "Cybersecurity Demo",
    title: "Off-by-One Error Exploit Demo",
    description: "This project demonstrates the exploitation of an off-by-one error in a simple contact manager application. My team and I built the application in C with a CWE-193 vulnerability, and then developed a python script to exploit this error. The demo illustrates how such an error can lead to unexpected behavior and potential security vulnerabilities.",
    githubHref: "https://github.com/am1rawish",
    link: "#contact",
    label: "Ask about future project",
    action: "Ask about this project",
    githubLabel: "View project GitHub repository"
  },
  {
    number: "05",
    type: "App concept",
    title: "Project Placeholder",
    description: "Replace this card with a class assignment, personal build, design mockup, or coding project.",
    githubHref: "https://github.com/am1rawish",
    link: "#contact",
    label: "Ask about project placeholder",
    action: "Ask about this project",
    githubLabel: "View Project Placeholder GitHub repository"
  }
];

const profileLinks = [
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: "resume"
  },
  {
    label: "GitHub",
    href: "https://github.com/am1rawish",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amira-wishah-6a57752bb/",
    icon: "linkedin"
  }
];

const backgroundHighlights = [
   {
    label: "Technology",
    type: "tech",
    src: "/background-computer.png",
    alt: "Technology illustration"
  },
  {
    label: "Personal",
    type: "personal",
    src: "/background-personal.png",
    alt: "Pixel art portrait"
  },
  {
    label: "Sport",
    type: "sport",
    src: "/background-sport.png",
    alt: "Soccer illustration"
  },
  
  {
    label: "Community",
    type: "community",
    src: "/background-community2.png",
    alt: "Community illustration"
  }
];

function ProfileIcon({ type }) {
  if (type === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="profile-link-icon">
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.86 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.51.47-3.16-.63-3.36-1.21-.11-.3-.6-1.21-1.03-1.45-.35-.19-.85-.66-.01-.67.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.91c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="profile-link-icon">
        <path d="M6.94 8.98H3.72v10.34h3.22V8.98ZM5.33 4a1.87 1.87 0 1 0 0 3.74 1.87 1.87 0 0 0 0-3.74Zm13.94 9.56c0-3.12-1.67-4.57-3.9-4.57-1.8 0-2.6.99-3.05 1.68V8.98H9.23v10.34h3.22v-5.11c0-1.35.25-2.66 1.93-2.66 1.65 0 1.67 1.55 1.67 2.75v5.02h3.22v-5.76Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="profile-link-icon">
      <path d="M6.75 2.75h7.3l4.2 4.2v14.3H6.75V2.75Zm6.55 1.9v3.05h3.05L13.3 4.65Zm-4.45 6.1v1.75h6.3v-1.75h-6.3Zm0 3.55v1.75h6.3V14.3h-6.3Zm0 3.55v1.75h3.9v-1.75h-3.9Z" />
    </svg>
  );
}

function ProjectGithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="project-github-icon">
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.86 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.51.47-3.16-.63-3.36-1.21-.11-.3-.6-1.21-1.03-1.45-.35-.19-.85-.66-.01-.67.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.91c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

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
        <h2>Hi, I&apos;m Amira!</h2>
        <p>
         This is my portfolio to share my projects, interests, and the work I&apos;m growing into.
        </p>
      </div>
      <div className="profile-link-list" aria-label="Profile links">
        {profileLinks.map((link) => (
          <a
            className="profile-link"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <ProfileIcon type={link.icon} />
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
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
