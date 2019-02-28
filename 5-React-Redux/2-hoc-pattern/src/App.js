import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import TopicList from './TopicList';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1>HOC pattern</h1>
        <hr />

        <TopicList />
        <CommentList />

      </div>
    );
  }
}

export default App;
