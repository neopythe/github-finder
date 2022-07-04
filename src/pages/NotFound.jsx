import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 text-white">Oops!</h1>
          <p className="text-3xl mb-6">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary btn-md">
            <FaHome className="mr-2" />
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
