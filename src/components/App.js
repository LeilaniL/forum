import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
          <HashRouter>
            <Switch>
              <Route exact path='/' render={() => <FrontPage allThePosts={this.state.masterPostList} />} />
              <Route path='/newpost' render={() => <CreatePost onPostCreation={this.handlePostCreation} />} />
            </Switch>
          </HashRouter>
        </header>
      </div>
    );
  }
}

export default App;

