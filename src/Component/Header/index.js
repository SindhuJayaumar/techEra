import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-items">
    <div className="navbar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
          className="logo-img"
        />
      </Link>
    </div>
  </nav>
)

export default Header
