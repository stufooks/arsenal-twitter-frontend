import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/api/posts'

class Create extends Component {
  constructor() {
    super()

    this.state = {
      newPost: {}
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler(e) {
    let post = this.state.newPost
    post[e.target.name] = e.target.value

    this.setState({
      newPost: post
    })
  }

  submitHandler(e) {
    e.preventDefault()
    axios.post(url, {
      name: this.state.newPost.name,
      content: this.state.newPost.content
    })
    .then(() => {
      console.log('post done')
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Your Display Name</label>
          <input type="text" name="name" onChange={this.changeHandler}></input>
          <label>Your Post:</label>
          <input type="text" name="content" onChange={this.changeHandler}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    );
  }
}

export default Create;