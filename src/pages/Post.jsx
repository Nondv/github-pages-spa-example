import React, { useState } from 'react';
import {
  useParams,
} from "react-router-dom";

import { getPosts } from '../api/posts.js'

export default function Post() {
  const { id } = useParams();
  const [lastLoadedId, setLastLoadedId] = useState(null);
  const [htmlLoading, setHtmlLoading] = useState(false);
  const [postHtml, setPostHtml] = useState(null);

  if(lastLoadedId !== id) {
    getPosts().then(posts => {
      setLastLoadedId(id);
      const post = posts.find(p => p.getId() == id);
      if(post) {
        setHtmlLoading(true);
        post.getHtml().then(html => {
          setPostHtml(html);
          setHtmlLoading(false);
        });
      }
      else {
        setHtmlLoading(false);
        setPostHtml(null);
      }
    });

    return <div>Loading...</div>;
  }

  if(htmlLoading) {
    return <div>Loading...</div>;
  }

  if(!postHtml) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div className="content">
      <div dangerouslySetInnerHTML={{ __html: postHtml }} />
    </div>
  )
}
