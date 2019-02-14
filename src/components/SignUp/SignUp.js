import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'

class SignUp extends Component {

  // renderRedirect() {
  //   return <Redirect to="/" />
  // }

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
        {/* {this.props.isLoggedIn ? this.renderRedirect() : null} */}
      </div>
    );
  }
}

export default SignUp;