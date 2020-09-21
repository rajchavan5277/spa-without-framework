import { LitElement, html } from 'lit-element';

export default class Page404 extends LitElement{
  
  render() {
    return html`<h2>Page Not Found</h2>`;
  }
}
customElements.define('page-not-found', Page404);