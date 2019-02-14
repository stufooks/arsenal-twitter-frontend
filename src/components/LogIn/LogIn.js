import React, { Component } from 'react';

class LogIn extends Component {
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
      </div>
    );
  }
}

export default LogIn;