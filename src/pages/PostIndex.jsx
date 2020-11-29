import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { getPosts } from '../api/posts.js'

export default function PostIndex() {
  const [posts, setPosts] = useState(null);

  if(!posts) {
    getPosts().then(setPosts);
    return <div>Loading...</div>;
  }

  const PostLink = ({post}) => <Link to={`/posts/${post.getId()}`}>{post.getTitle()}</Link>;

  return (
    <div>
      <h1 className="title">Posts</h1>
      <ul>
        {posts.map(p => <li key={p.getId()} ><PostLink post={p} /></li>)}
      </ul>
    </div>
  )
}
