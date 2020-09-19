import "core-js/stable";
import "regenerator-runtime/runtime";
import { LitElement, html } from 'lit-element';
import { Router } from 'simple-wc-router';
import './components/sidebar/sidebar.js'
import './components/header/header.js';
import './views/home/home.js';
class App extends Router(LitElement) {
  static get routes() {
    return [
      // Root path
      {
        path: "/",
        component: "app-home"
      },
      {
        path: "/shop",
        component: "app-home"
      },
      {
        path: "*",
        render: () => html`<h2>404 The requested page could not be found</h2>`
      }
    ];
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`  
    <app-header></app-header>
        <main>
            ${this.routeElement}
        </main>
      `
  }
}
customElements.define('my-app', App);