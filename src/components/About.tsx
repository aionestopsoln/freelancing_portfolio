import { useState } from "react"
import profile from "../assets/Samadrita.jpeg"
import profile1 from "../assets/Shekhar.jpg"
import resume1 from "../assets/Samadrita_Purakayastha_Resume.pdf"
import resume2 from "../assets/Shekhar_Sen_Resume.pdf"
import useCursorShake from "../hooks/useCursorShake"

const About = () => {
  const shakeRef = useCursorShake(25)

  const [activeResume, setActiveResume] = useState<string | null>(null)

  const openResume = (resume: string) => {
    setActiveResume(resume)
  }

  const closeResume = () => {
    setActiveResume(null)
  }

  return (
    <section id="about" className="about">

      <div ref={shakeRef} className="about-container about-card">

        {/* Image Section */}
        <div className="about-images">

          <div className="about-image">
            <img src={profile} alt="Samadrita" />
            <span>Samadrita</span>
            <button onClick={() => openResume(resume1)}>View Resume</button>
          </div>

          <div className="about-image">
            <img src={profile1} alt="Shekhar" />
            <span>Shekhar</span>
            <button onClick={() => openResume(resume2)}>View Resume</button>
          </div>

        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Us</h2>

          <p>
            We are a team of passionate developers with a strong interest in building
            scalable software systems and intelligent applications. Our work focuses
            on combining modern web technologies with data-driven solutions to build impactful products.
          </p>

          <p>
            We enjoy working across the full stack and experimenting with emerging
            technologies such as machine learning, cloud computing, and distributed systems.
          </p>

          <p>
            Outside of coding, we enjoy exploring new ideas, contributing to technical
            discussions, and continuously learning new tools that help us build better software.
          </p>
        </div>

      </div>

      {/* Modal */}
      {activeResume && (
        <div className="resume-modal">
          <div className="resume-content">

            {/* Top Bar */}
            <div className="resume-header">
              <button className="close-btn" onClick={closeResume}>
                ✕
                <span className="close-tooltip">Close</span>
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={activeResume}
              title="Resume"
              className="resume-frame"
            />
          </div>
        </div>
      )}

    </section>
  )
}

export default About