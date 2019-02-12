import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import './Create.css'

const url = 'http://localhost:3001/api/posts'

class Create extends Component {
  constructor() {
    super()

    this.state = {
      newPost: {},
      redirect: false
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
    console.log(this.state.newPost)
    
    axios.post(url, {
      author: this.state.newPost.name,
      content: this.state.newPost.content
    })
    .then(() => {
      console.log('post done')
      this.setState({
        redirect: true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderRedirect() {
    return <Redirect to ="/" />
  }

  render() {
    return (
      <div className="Create">
        <form onSubmit={this.submitHandler}>
          <label>Your Display Name:</label>
          <input className="nameInput" type="text" name="name" onChange={this.changeHandler}></input>
          <label>Your Post:</label>
          <input className="contentInput" type="text" name="content" onChange={this.changeHandler}></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
        {this.state.redirect ? this.renderRedirect() : null}
      </div>
    );
  }
}

export default Create;