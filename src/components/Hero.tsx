import { useEffect, useState } from "react"
import profile from "../assets/Samadrita.jpeg"
import profile1 from "../assets/Shekhar.jpg"
import Typewriter from "./Typewriter"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const Hero = () => {

  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false)
      } else {
        setShowScroll(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section className="hero">

      <div className="hero-row hero-card">

        <div className="hero-content">
          <Typewriter text="Ms. Samadrita Purkayastha - Gen AI Engineer" />
          <p>I am an AI-focused Software Engineer specializing in end-to-end Generative AI solutions using LLMs (GPT, Gemini), LangGraph, CrewAI, and vector databases. At Capgemini, I’ve developed scalable AI chatbots, integrated Python-based backends with Flask and PostgreSQL, and delivered enterprise-grade AI systems. Backed by strong expertise in machine learning, NLP, and backend engineering, I’m driven to build impactful, production-ready AI solutions.</p>
          <div className="social-icons">

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Samadrita1234">
          <FaGithub />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samadrita-purakayastha-a07207193/">
          <FaLinkedin />
        </a>

      </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="Samadrita" />
        </div>

      </div>

      <div className="hero-row hero-card">

        <div className="hero-content">
          <Typewriter text="Mr. Shekhar Sen - Full Stack Developer" />
          <p>Results-driven Full Stack Software Engineer with expertise in Python, SQL, and front-end development. Proven track record in building automation solutions, troubleshooting complex issues, and delivering efficient, client-focused systems. Strong analytical and problem-solving skills with a focus on optimizing performance and enhancing user satisfaction.</p>
          <div className="social-icons">

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/shekharsen">
          <FaGithub />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shekhar-sen-8530221a2/">
          <FaLinkedin />
        </a>

      </div>
        </div>

        

        <div className="hero-img">
          <img src={profile1} alt="Shekhar" />
        </div>

      </div>

      {showScroll && (
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll</span>
        </div>
      )}

    </section>
  )
}

export default Hero