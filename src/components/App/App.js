import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from '../Home/Home'
import Show from '../Show/Show'
import Header from '../Header/Header'
import Create from '../Create/Create'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/:id" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;