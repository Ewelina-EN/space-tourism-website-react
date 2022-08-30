import logo from './logo.svg';
import './navbar.css';
import CustomLink from "../utils";

export default function Navbar() {

  return (
    <>
      <div className="nav">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav_menu">
          <ul>
            <CustomLink className="active" to="/" ><strong>00</strong> HOME</CustomLink>
            <CustomLink to="/destination" ><strong>02</strong> DESTINATION</CustomLink>
            <CustomLink to="/crew"><strong>03</strong> CREW</CustomLink>
            <CustomLink to="/technology" ><strong>04</strong> TECHNOLOGY</CustomLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

