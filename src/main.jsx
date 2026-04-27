import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const projects = [
  {
    number: "01",
    type: "Robot Game Software",
    title: "RE-ROUTE",
    description: "In this project, I worked with SunFounder's PiCrawler robot to develop an interactive learning game for children called RE-ROUTE. I designed and built the game mechanics, storyline, and user interface, creating an engaging experience that combines physical robotics with educational gameplay. The system uses computer vision and a navigation algorithm to walk through gameplay. This was built using Python.",
    githubHref: "https://github.com/am1rawish",
    link: "#top",
    label: "View Personal Portfolio project",
    action: "Ask about this project",
    githubLabel: "View RE-ROUTE GitHub repository"
  },
  {
    number: "02",
    type: "Software development",
    title: "Self-Checkout System Software",
    description: "In this project, I worked with a team to design and develop a self-checkout system software for a grocery stores. I contributed to the software development process by implementing key features such as product scanning, payment processing, and user interface design. This was build using Java and JavaFX",
    githubHref: "https://github.com/am1rawish",
    link: "#contact",
    label: "Ask about project placeholder",
    action: "Ask about this project",
    githubLabel: "View Project Placeholder GitHub repository"
  },
  {
    number: "03",
    type: "Frontend development",
    title: "Movie Theatre Booking System",
    description: "For this project, my team and I worked to design and develop the frontend of a movie theatre booking system. This project was designed through multiple rounds of prototyping using Figma and implemented using React. It was a practice in HCI design principles and frontend development, specificlly training my skills in interative prototyping based on user feedback.",
    githubHref: "https://github.com/am1rawish",
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
    type: "Website",
    title: "Personal Portfolio Website",
    description: "In this project, I designed and developed my personal portfolio website to showcase my background, projects, and interests in an interactive and visually polished way. I built the site using React, JavaScript, HTML, and CSS, with a focus on responsive design, custom styling, and frontend functionality that reflects both my technical skills and personal style.",
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
    href: withBase("/resume.pdf"),
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
    src: withBase("/background-computer.png"),
    alt: "Technology illustration"
  },
  {
    label: "Personal",
    type: "personal",
    src: withBase("/background-personal.png"),
    alt: "Pixel art portrait"
  },
  {
    label: "Sport",
    type: "sport",
    src: withBase("/background-sport.png"),
    alt: "Soccer illustration"
  },
  
  {
    label: "Community",
    type: "community",
    src: withBase("/background-community2.png"),
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
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);

  return (
    <section className="section about-section" id="about">
      <button
        type="button"
        className={`profile-coin-shell${isProfileFlipped ? " is-flipped" : ""}`}
        onClick={() => setIsProfileFlipped((current) => !current)}
        aria-pressed={isProfileFlipped}
        aria-label="Toggle profile image between pixel portrait and photo"
      >
        <div className="profile-coin">
          <div className="profile-coin-face profile-coin-front">
            <img
              className="profile-picture"
              src={withBase("/profile-placeholder.jpeg")}
              alt=""
            />
          </div>
          <div className="profile-coin-face profile-coin-back">
            <img
              className="profile-picture profile-picture-real"
              src={withBase("/profile-real.png")}
              alt=""
            />
          </div>
        </div>
      </button>
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
      <div className="background-sidebar">
        <p className="eyebrow">Background</p>
        <h2>My background</h2>
        <div className="background-gallery" aria-label="Background image placeholders">
          {backgroundHighlights.map((item) => (
            <figure className="background-gallery-item" key={item.label}>
              <div className={`background-gallery-circle background-gallery-circle-${item.type}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`background-gallery-image background-gallery-image-${item.type}`}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className="section-copy">
        <p>
          Born and raised in Calgary, I'm a Palestinian-Canadian computer science student at the University of Calgary currently in my 4th year of my degree. 
          I first learned to code when I was in 11th grade through the University of Calgary's Shulich ignite program, which sparked 
          my interest in computer science and eventually led me to my degree. 
          
          </p>
          
          <p>Throughout my degree, I've worked as a tutor teaching math and science
          to elementary and high school students. Outside of work and my studies, I enjoy sports, music, 
          travel, and learning new things! 
        </p>
        <p>
         In the future, I am interested in linking my love of sport and technology in a project. Im excited to continue 
          learning and growing as a developer, and to share my journey through this portfolio!
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
            <div className="project-divider" aria-hidden="true"></div>
            <div className="project-actions">
              <a href={project.link} aria-label={project.label}>{project.action}</a>
              <a
                className="project-github-link"
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label={project.githubLabel}
              >
                <ProjectGithubIcon />
                <span className="sr-only">{project.githubLabel}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio message from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:amirawish16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect!</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Name" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="Email" required />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" placeholder="Your message..." required />
        </label>
        <button className="send-button" type="submit">
          Send email
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 5.5h16v13H4v-13Zm2.15 2 5.85 4.39 5.85-4.39H6.15Zm11.85 9V9.8l-6 4.5-6-4.5v6.7h12Z" />
          </svg>
        </button>
      </form>
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
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
