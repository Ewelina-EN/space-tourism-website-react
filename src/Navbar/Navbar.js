import React, { Component } from 'react';
import logo from './logo.svg';
import { MenuItems } from './MenuItems';
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked })
  // }
  // back to this for mobile: https://www.youtube.com/watch?v=fL8cFqhTHwA&ab_channel=BrianDesign

  render() {
    return (
      <div className="nav">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav_menu">
          {/* <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div> */}
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    <strong>{item.number} </strong>{item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar