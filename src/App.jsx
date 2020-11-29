import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Post from './pages/Post.jsx'
import PostIndex from './pages/PostIndex.jsx'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

          <Switch>
            <Route path="/posts/:id">
              <Post />
            </Route>

            <Route path="/">
              <PostIndex />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}
