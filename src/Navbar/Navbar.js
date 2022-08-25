import logo from './logo.svg';
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  return (
    <>
      <div className="nav">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav_menu">
          <ul>
            <CustomLink className="active" to="/home" ><strong>00</strong> HOME</CustomLink>
            <CustomLink to="/destination" ><strong>02</strong> DESTINATION</CustomLink>
            <CustomLink to="/crew" ><strong>03</strong> CREW</CustomLink>
            <CustomLink to="/technology" ><strong>04</strong> TECHNOLOGY</CustomLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}


