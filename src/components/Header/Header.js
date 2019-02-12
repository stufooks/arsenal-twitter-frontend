import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <div className="icon"></div>
          <h1>Arsenal Fanpage</h1>
        </Link>
        <nav>
          <Link to="/create">
            <div className="new-icon"></div>
            New Post
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;