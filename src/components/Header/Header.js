import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/"><h1>Welcome to the Arsenal Fanpage</h1></Link>
        <nav>
          <Link to="/create">New Post</Link>
        </nav>
      </div>
    );
  }
}

export default Header;