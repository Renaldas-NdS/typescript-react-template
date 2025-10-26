import './About.css'

const About = () => {
  return (
    <div className="about">
      <h1>About This Template</h1>
      <div className="about-content">
        <section>
          <h2>Built With Modern Technologies</h2>
          <p>
            This template is designed to help you kickstart your React projects
            with a solid foundation. It includes all the essential tools and
            configurations needed for modern web development.
          </p>
        </section>

        <section>
          <h2>Key Technologies</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>React 18</h3>
              <p>
                The latest version of React with concurrent features and
                improved performance.
              </p>
            </div>
            <div className="tech-card">
              <h3>TypeScript</h3>
              <p>
                Strong typing for better code quality, refactoring, and
                developer experience.
              </p>
            </div>
            <div className="tech-card">
              <h3>Vite</h3>
              <p>
                Next-generation frontend tooling with lightning-fast HMR and
                optimized builds.
              </p>
            </div>
            <div className="tech-card">
              <h3>React Router</h3>
              <p>
                Declarative routing for React applications with nested routes
                support.
              </p>
            </div>
            <div className="tech-card">
              <h3>Zustand</h3>
              <p>
                Lightweight state management with a simple and intuitive API.
              </p>
            </div>
            <div className="tech-card">
              <h3>Vitest</h3>
              <p>
                Blazing fast unit testing framework powered by Vite with Jest
                compatibility.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Getting Started</h2>
          <p>
            Clone this repository, install dependencies, and start building your
            amazing application. Check the README.md for detailed instructions.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About