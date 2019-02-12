import React, { Component } from 'react';
import Post from '../Post/Post'
import axios from 'axios';

const url = 'http://localhost:3001/api/posts/'

class Show extends Component {
  constructor() {
    super()

    this.state = {
      post: {}
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
    // .then(res => {
    //   console.log('delete called')
    // })
  }

  render() {
    return (
      <div className="Show">
        <Post post={this.state.post}/>
      </div>
    );
  }
}

export default Show;