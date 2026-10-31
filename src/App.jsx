
import { useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'CivicFix',
    category: 'Full Stack',
    description:
      'A campus route planner and civic issue platform using graph algorithms to help users find efficient routes and manage issues.',
    stack: 'Java · Spring Boot · React · PostgreSQL',
    github: 'https://github.com/ayushpainuly1234-ui/civicfix',
    demo: 'https://civicfix-7q99.onrender.com',
  },
  {
    name: 'Ujjwal Music Player',
    category: 'Web Development',
    description:
      'A Spotify-inspired music player with playlist controls, audio playback and a responsive interface.',
    stack: 'HTML · CSS · JavaScript',
    github: 'https://github.com/ayushpainuly1234-ui/ujjwal-music-player',
    demo: 'https://ayushpainuly1234-ui.github.io/ujjwal-music-player/',
  },
  {
    name: 'Advanced Java DSA',
    category: 'Problem Solving',
    description:
      'A structured collection of Java implementations covering advanced data structures and algorithms.',
    stack: 'Java · Graphs · DP · Trees · Backtracking',
    github: 'https://github.com/ayushpainuly1234-ui/advanced-java-dsa',
    demo: '',
  },
]

const skills = [
  { title: 'Programming', items: ['Java', 'C'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Databases & Tools', items: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub'] },
  { title: 'Core CS', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems'] },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [challenge, setChallenge] = useState(0)

  const filters = ['All', 'Full Stack', 'Web Development', 'Problem Solving']
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const challenges = [
    {
      question: 'What would you use to find the shortest path in a weighted graph?',
      answer: 'Dijkstra’s Algorithm',
      detail: 'It finds shortest paths from a source when edge weights are non-negative.',
    },
    {
      question: 'Which data structure follows LIFO?',
      answer: 'Stack',
      detail: 'The Last In, First Out principle means the most recently added item is removed first.',
    },
    {
      question: 'Which technique solves problems by combining overlapping subproblems?',
      answer: 'Dynamic Programming',
      detail: 'DP stores results of subproblems to avoid repeated computation.',
    },
  ]

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home">UP<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#challenge">Challenge</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-button"
          href="https://github.com/ayushpainuly1234-ui"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="pulse"></span>
            OPEN TO OPPORTUNITIES
          </div>
          <p className="eyebrow">HELLO, I'M</p>
          <h1>Ujjwal <span>Painuly.</span></h1>
          <h2>Software Developer <span>&</span> Problem Solver</h2>
          <p className="hero-description">
            I build practical software, explore backend engineering
            and enjoy solving challenging problems with Java and DSA.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">Explore My Work ↗</a>
            <a className="secondary-button" href="#contact">Let's Connect</a>
          </div>
          <div className="hero-meta">
            <span>📍 Dehradun, India</span>
            <span>🎓 BCA Graduate</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>DEVELOPER PROFILE</span>
            <span className="card-dot">●</span>
          </div>
          <div className="avatar">UP</div>
          <h3>Building. Learning. Improving.</h3>
          <p>Turning ideas into working software, one problem at a time.</p>
          <div className="terminal">
            <div className="terminal-heading">
              <span>●</span><span>●</span><span>●</span>
              <small>ujjwal.java</small>
            </div>
            <p><i>const</i> developer = {'{'}</p>
            <p className="indent">focus: <b>"Software Engineering"</b>,</p>
            <p className="indent">language: <b>"Java"</b>,</p>
            <p className="indent">mindset: <b>"Keep Learning"</b></p>
            <p>{'}'}</p>
            <p className="terminal-cursor">▌</p>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      <section className="about-section section" id="about">
        <div className="section-label">01 / ABOUT ME</div>
        <div className="about-grid">
          <h2>Curiosity drives me.<br /><span>Code moves me.</span></h2>
          <div>
            <p>
              I'm a software developer focused on Java, data structures,
              algorithms and backend development. I enjoy understanding
              how systems work and building projects that solve practical problems.
            </p>
            <p>
              My learning journey combines consistent problem-solving
              with hands-on development. I believe strong fundamentals
              and the ability to keep learning matter most.
            </p>
            <a className="text-link" href="https://github.com/ayushpainuly1234-ui">
              Explore my GitHub profile ↗
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="section-label">02 / TECH SUPERPOWERS</div>
        <h2 className="section-title">Tools I work <span>with.</span></h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <h2 className="section-title">Things I've <span>built.</span></h2>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? 'filter active' : 'filter'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-number">0{index + 1}</div>
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="challenge-section section" id="challenge">
        <div className="section-label">04 / INTERACTIVE ZONE</div>
        <div className="challenge-card">
          <div>
            <span className="challenge-kicker">TEST YOUR TECH KNOWLEDGE</span>
            <h2>A little <span>coding challenge.</span></h2>
            <p>{challenges[challenge].question}</p>
            <button
              className="primary-button"
              onClick={() => setChallenge((challenge + 1) % challenges.length)}
            >
              Try Another Question ↗
            </button>
          </div>
          <div className="challenge-answer">
            <span>REVEALED ANSWER</span>
            <h3>{challenges[challenge].answer}</h3>
            <p>{challenges[challenge].detail}</p>
            <small>Question {challenge + 1} of {challenges.length}</small>
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="section-label">05 / GET IN TOUCH</div>
        <h2>Have an idea?<br /><span>Let's build something.</span></h2>
        <p>I'm interested in software development, engineering opportunities and learning from great teams.</p>
        <a className="primary-button" href="mailto:ujjwalpainuly@gmail.com">
          Say Hello ↗
        </a>
        <div className="social-links">
          <a href="https://github.com/ayushpainuly1234-ui" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#home">UP<span>.</span></a>
        <p>Designed & built with curiosity by Ujjwal Painuly.</p>
        <span>© 2026</span>
      </footer>
    </main>
  )
}

export default App
