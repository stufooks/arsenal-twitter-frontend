import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class LogIn extends Component {

  renderRedirect() {
    return <Redirect to="/" />
  }

  render() {
    return (
      <div className="LogIn">
        <form onSubmit={this.props.loginSubmit}>
          <label>Email:</label>
          <input name="email" type="text" onChange={this.props.inputChanger}></input>
          <label>Password:</label>
          <input name="password" type="password" onChange={this.props.inputChanger}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        {this.props.isLoggedIn ? this.renderRedirect() : null}
      </div>
    );
  }
}

export default LogIn;