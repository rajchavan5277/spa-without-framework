import { fetch } from 'whatwg-fetch';

export function ajax(url, data = {}, method = 'POST', headersOptions = {}) {
  return fetch(url, {  // Return promise
    method: method,
    headers : headersOptions
  })
  .then(response => { return response.json() })
  .then(json => { return json; })
  .catch(ex => { return ex; });
}
