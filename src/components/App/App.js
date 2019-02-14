import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Home from '../Home/Home'
import Show from '../Show/Show'
import Header from '../Header/Header'
import Create from '../Create/Create'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
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

    this.inputChanger = this.inputChanger.bind(this)
    this.signupSubmit = this.signupSubmit.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
    this.logoutSubmit = this.logoutSubmit.bind(this)
  }

  inputChanger(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  signupSubmit(e) {
    e.preventDefault()
    axios.post(url + "/signup", {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      console.log(res.data)
      localStorage.token = res.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  loginSubmit(e) {
    e.preventDefault()
    axios.post(url + "/login", {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      localStorage.token = res.data.token
      
      let decoded = jwtDecode(localStorage.token)

      this.setState({
        isLoggedIn: true,
        username: decoded.username
      })
    })
    .catch(err => console.log(err))
  }

  logoutSubmit() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  // componentDidMount() {
  //   if(localStorage.token) {
  //     let decoded = jwtDecode(localStorage.token)
  //     this.setState({ 
  //       isLoggedIn: true
  //      })
  //   }
  // }
  
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} logoutSubmit={this.logoutSubmit}/>
        <Switch>
          <Route path="/users/signup" render={() => <SignUp inputChanger={this.inputChanger} signupSubmit={this.signupSubmit} isLoggedIn={this.state.isLoggedIn}/>} />
          <Route path="/users/login" render={() => <LogIn inputChanger={this.inputChanger} loginSubmit={this.loginSubmit} isLoggedIn={this.state.isLoggedIn}/>} />
          <Route path="/create" render={() => <Create {...this.state} />} />
          <Route path="/:id" render={(props) => <Show {...props} {...this.state}/>} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;