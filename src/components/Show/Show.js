import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Post from '../Post/Post'
import axios from 'axios';
import './Show.css'

const url = 'http://localhost:3001/api/posts/'

class Show extends Component {
  constructor() {
    super()

    this.state = {
      post: {},
      redirect: false,
      message: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    axios.get(url + this.props.match.params.id)
    .then(res => {
      this.setState({
        post: res.data[0]
      })
    })
  }

  clickHandler() {
    axios.delete(url + this.props.match.params.id, {
      data: {username: this.props.username}
    })
    .then(res => {
      if(res.data) {
        this.setState({
          redirect: true
        })
      } else {
        this.setState({
          message: true
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderRedirect() {
    return <Redirect to="/" />
  }

  render() {
    return (
      <div className="Show">
        <Post post={this.state.post} show={true}/>
        <button className="delete-button" onClick={this.clickHandler}>DELETE THIS POST</button>
        {this.state.message ? <h1>Not your post!</h1> : null}

        {this.state.redirect ? this.renderRedirect() : null}
      </div>
    );
  }
}

export default Show;