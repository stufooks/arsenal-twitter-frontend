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

    this.likeHandler = this.likeHandler.bind(this)
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

  likeHandler(e) {
    let posts = this.state.posts
    let post = posts.filter(post => post._id === e.target.name)
    let i = posts.indexOf(post[0])
    
    post[0].likes = post[0].likes + 1

    let likes = post[0].likes

    posts[i] = post[0]

    this.setState({
      posts: posts
    })

    axios.put(url + "/" + this.state.posts[i]._id, {
      likes: likes
    })
  }

  render() {

    let posts = this.state.posts.map(post => {
      return (
        <div key={post._id}>
          <Post post={post} likeHandler={this.likeHandler}/>
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