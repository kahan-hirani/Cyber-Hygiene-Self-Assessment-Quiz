import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000)
    return () => clearTimeout(timer)
  }, [])
 
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black animate__animated animate__fadeIn">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center z-10">
        <div className="max-w-2xl">
          {showIntro && (
            <div className="alert alert-info mb-6 animate__animated animate__bounceIn">
              Welcome to your Cyber Hygiene Journey! Test your skills now...
            </div>
          )}
          <div className="card bg-base-200 bg-opacity-80 p-6 shadow-xl rounded-lg">
            <h1 className="text-5xl font-bold mb-4 text-white animate__animated animate__fadeInDown">Cyber Hygiene Self-Assessment Survey</h1>
            <p className="text-lg mb-6 text-gray-300 animate__animated animate__fadeInUp">
              Test your awareness of real-world social engineering threats like phishing, impersonation, and data exposure risks with 20 challenging questions.
            </p>
            <div className="mb-6">
              <progress className="progress progress-primary w-56 mx-auto" value="0" max="100"></progress>
              <p className="text-sm text-gray-400 mt-2">Ready to start? 0% complete!</p>
            </div>
            <div className="collapse collapse-arrow bg-base-100 mb-4">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-gray-200">Why Take This Survey?</div>
              <div className="collapse-content text-gray-300">
                <p>Enhance your cybersecurity skills, identify vulnerabilities, and learn best practices to stay safe online.</p>
              </div>
            </div>
            <Link
              to="/quiz"
              className="btn btn-primary btn-lg text-white hover:bg-primary-focus hover:scale-105 transition-transform duration-300 animate__animated animate__pulse"
            >
              Start Survey Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home