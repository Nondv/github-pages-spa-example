/*
 * Github Pages can't pass all requests to a single file (e.g. /hello will try to access /hello file)
 * which is very inconvenient for single-page applications.
 *
 * The solution:
 * 1. 404 page saves the location in the browser.
 * 2. Redirects to index.html (/)
 * 3. Main app restores the location and uses it for routing
 */

const KEY = 'redirectUri';

export function saveRedirectUri() {
  const pathAndQuery = location.pathname + location.search;
  localStorage.setItem(KEY, pathAndQuery)
}

export function popRedirectUri() {
  const uri = localStorage.getItem(KEY);
  localStorage.removeItem(KEY);
  return uri;
}
