import 'bulma/css/bulma.css'

import { popRedirectUri } from './redirectUri'

console.log('Hello World from main main file!');
const redirectUri = popRedirectUri();

if(redirectUri) {
  console.log(`Originaly requested: ${redirectUri}`);
  history.pushState('', '', redirectUri);
}
