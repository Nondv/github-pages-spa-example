import 'bulma/css/bulma.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import { popRedirectUri } from './redirectUri';

console.log('Hello World from main main file!');
const redirectUri = popRedirectUri();

if(redirectUri) {
  console.log(`Originaly requested: ${redirectUri}`);
  history.pushState('', '', redirectUri);
}

ReactDOM.render(<App />, document.getElementById("main"))
