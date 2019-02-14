import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.props.signupSubmit}>
          <label>Email:</label>
          <input name="email" type="text" onChange={this.props.inputChanger}></input>
          <label>Username:</label>
          <input name="username" type="text" onChange={this.props.inputChanger}></input>
          <label>Password:</label>
          <input name="password" type="password" onChange={this.props.inputChanger}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;