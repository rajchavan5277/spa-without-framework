import "core-js/stable";
import "regenerator-runtime/runtime";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';
import './components/sidebar/sidebar.js'
import './components/header/header.js';
import './views/home/home.js';
import './views/shop/shop.js';
import './views/product/product.js';
import './assets/scss/index.scss';

class App extends LitElement {
  constructor() {
    super();
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <div class="outlet">
    </div>
      `
  }

  firstUpdated() {
    const router = new Router(this.renderRoot);
    router.setRoutes([
      { path: '/', component: 'app-home' },
      { path: '/shop', component: 'app-shop' },
      { path: '/product/:id', component: 'app-product' },
      { path: '(.*)', component: 'app-shop' }
    ]);
  }

}
customElements.define('my-app', App);