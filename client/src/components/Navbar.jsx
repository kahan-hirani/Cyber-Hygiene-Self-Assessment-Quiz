import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow animate__animated animate__fadeIn">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl animate-pulse">Cyber Hygiene Survey</Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  )
}

export default Navbar