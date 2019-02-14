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
          {!this.props.isLoggedIn ? <Link to="/users/login">Log In</Link> : null}
          {!this.props.isLoggedIn ? <Link to="/users/signup">Sign Up</Link> : null}
          {this.props.isLoggedIn ? <Link to="/create"><div className="new-icon"></div>New Post</Link> : null}
          {this.props.isLoggedIn ? <Link to="/" onClick={this.props.logoutSubmit}>Log Out</Link> : null}
        </nav>
      </div>
    );
  }
}

export default Header;