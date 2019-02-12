import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Welcome to the Arsenal Fanpage</h1>
        <nav>
          <Link to="/create">New Post</Link>
        </nav>
      </div>
    );
  }
}

export default Header;