import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    console.log(this.props.post)
    return (
      <div className="Post">
        <Link to={`/${this.props.post._id}`}>
          <div className="card">
            <h1>{this.props.post.author}</h1>
            <h2>{this.props.post.content}</h2>
          </div>
        </Link>
        <button>LIKE</button>
      </div>
    );
  }
}

export default Post;