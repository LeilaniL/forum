import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Post from '../components/Post';
import CreatePost from './CreatePost';
import FrontPage from './FrontPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handlePostCreation = this.handlePostCreation.bind(this);
  }

  handlePostCreation(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    console.log(newMasterPostList);
    this.setState({ masterPostList: newMasterPostList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Post /> */}
          <FrontPage allThePosts={this.state.masterPostList} />
          <CreatePost onPostCreation={this.handlePostCreation} />
        </header>
      </div>
    );
  }
}

export default App;

