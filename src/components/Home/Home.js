import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post'

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
          <Post post={post} />
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