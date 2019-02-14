import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Show from '../Show/Show'
import Header from '../Header/Header'
import Create from '../Create/Create'
import SignUp from '../SignUp/SignUp'
import axios from 'axios';

const url = 'http://localhost:3001/users'

class App extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      username: "",
      password: "",
      isLoggedIn: false
    }

    this.signupChanger = this.signupChanger.bind(this)
    this.signupSubmit = this.signupSubmit.bind(this)
  }

  signupChanger(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  signupSubmit(e) {
    console.log('front end signup called')
    console.log(this.state)
    e.preventDefault()
    axios.post(url + "/signup", {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      localStorage.token = res.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/users/signup" render={() => <SignUp signupChanger={this.signupChanger} signupSubmit={this.signupSubmit} />} />
          <Route path="/create" component={Create} />
          <Route path="/:id" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;