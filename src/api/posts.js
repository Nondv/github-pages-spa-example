import axios from 'axios';
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt();
const renderMd = txt => md.render(txt);

export function getPosts() {
  return axios.get(`/data/posts.json`)
              .then(r => r.data.map(metadata => new Post(metadata)));
}

export class Post {
  constructor(metadata) {
    this.metadata = metadata;
  }

  getId() {
    return this.metadata.id;
  }

  getTitle() {
    return this.metadata.title;
  }

  getHtml() {
    if(!this.htmlPromise) {
      this.htmlPromise = this.getContent().then(renderMd);
    }

    return this.htmlPromise;
  }

  getContent() {
    if(!this.contentPromise) {
      this.contentPromise = axios.get(this.metadata.url).then(r => r.data);
    }

    return this.contentPromise;
  }
}
