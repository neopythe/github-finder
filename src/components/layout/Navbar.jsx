import { Link } from 'react-router-dom'
import { ImUsers } from 'react-icons/im'

import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-white">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <ImUsers className="inline text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle pl-4">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
