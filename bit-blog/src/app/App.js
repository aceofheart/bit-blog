import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { Route, Switch } from "react-router-dom"
import { PostList } from "./main/posts/PostList"
import { SinglePostItem } from "./main/posts/SinglePostItem"
import { AboutPage } from './main/AboutPage'
import { AuthorList } from './main/authors/AuthorList'
import { SingleAuthor } from './main/authors/SingleAuthor';
import { NewPost } from "./main/posts/newPost"


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={SinglePostItem} />
          <Route path="/author" component={AuthorList} />
          <Route path="/authors/:id" component={SingleAuthor} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={PostList} />

        </Switch>

        <Footer />
      </div>

    )
  }
}

export default App;
