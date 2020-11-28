import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
            <Route path="/404.html">
              404!!!! {location.toString()}
            </Route>
            <Route path="/">
              Home page
            </Route>
          </Switch>
      </div>
    </Router>
  )
}
