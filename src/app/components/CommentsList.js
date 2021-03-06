import React, { Component } from 'react'
import axios from 'axios';
import Comment from './Comment';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  render() {
    if(!this.state.comments.length) {
      return null;
    }

    const comments = this.state.comments.map((comment, index) => {
      return <Comment key={index} { ...comment } />
    });

    return (
      <div> 
        <h1>Пользователи</h1>
        { comments }
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments')
    .then(response => {
      this.setState({ comments: response.data })
    });
  }
}

//тут делаем ajax запрос данных с сервера, перед этим установили npm install axios
