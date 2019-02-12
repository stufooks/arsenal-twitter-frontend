import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './Post.css'

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <Link to={`${this.props.post._id}`}>
          <div className="content">
            <h1>@{this.props.post.author}</h1>
            <h2>{this.props.post.content}</h2>
            <h4>Likes: {this.props.post.likes}</h4>
          </div>
        </Link>
        <button onClick={this.props.likeHandler} name={this.props.post._id}>LIKE</button>
      </div>
    );
  }
}

export default Post;