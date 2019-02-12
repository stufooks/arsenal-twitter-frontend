import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Post from '../Post/Post'
import axios from 'axios';

const url = 'http://localhost:3001/api/posts/'

class Show extends Component {
  constructor() {
    super()

    this.state = {
      post: {},
      redirect: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    axios.get(url + this.props.match.params.id)
    .then(res => {
      console.log(res.data[0])
      this.setState({
        post: res.data[0]
      })
    })
  }

  clickHandler() {
    axios.delete(url + this.props.match.params.id)
    .then(() => {
      console.log('delete called')
      this.setState({
        redirect: true
      })
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
        <Post post={this.state.post}/>
        <button onClick={this.clickHandler}>DELETE</button>

        {this.state.redirect ? this.renderRedirect() : null}
      </div>
    );
  }
}

export default Show;