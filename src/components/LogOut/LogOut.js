import React, { Component } from 'react';

class LogOut extends Component {
  render() {
    return (
      <div className="LogOut">
        <form onSubmit={this.props.logoutSubmit}>
          <input type="submit" value="LOGOUT"></input>
        </form>
      </div>
    );
  }
}

export default LogOut;