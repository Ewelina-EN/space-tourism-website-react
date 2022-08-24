import logo from './logo.svg';
import './Navbar.css'

export default function Navbar() {

  return (
    <>
      <div className="nav">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav_menu">
          <ul>
            <li className="active"><a href="/home" ><strong>00</strong> HOME</a></li>
            <li><a href="/destination"><strong>01</strong> DESTINATION</a></li>
            <li><a href="/crew"><strong>02</strong> CREW</a></li>
            <li><a href="/technology"><strong>03</strong> TECHNOLOGY</a></li>
          </ul>
        </nav>
      </div>

    </>
  )
}

