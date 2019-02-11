import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/api/posts'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(url)
    .then(res => {
      console.log(res.data)
      this.setState({
        posts: res.data
      })
    })
  }

  render() {

    let posts = this.state.posts.map(post => {
      return (
        <div key={post._id}>
          <h1>{post.author}</h1>
          <h2>{post.content}</h2>
        </div>
      )
    })

    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default Home;