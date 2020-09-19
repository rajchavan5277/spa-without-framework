import { LitElement, html, css  } from 'lit-element';
import './header.scss';
export default class Header extends LitElement{
  render() {
    return html`
        <header>
        <nav class="background-white">
          <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
              <li><a href="/"><img src="src/assets/icon/logo.png" class="logo"/></a></li>
              <li><a href="/" class="nav__link" data-link>HOME</a></li>
              <li><a href="/products" class="nav__link" data-link>SHOP</a></li>
              <li><a href="/magazine" class="nav__link" data-link>MAGAZINE</a></li>
            </ul>
            <ul class="right hide-on-med-and-down">
              <li>
                <input id="last_name" type="text" class="validate">
              </li>
              <li><a href="javascript:void(0)"><img src="src/assets/icon/search.png" /></a></li>
              <li><a href="#"><img src="src/assets/icon/shopping-cart.png" /></a></li>
              <li><a href="#">LOGIN</a></li>
            </ul>
          </div>
        </nav>
        </header>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('app-header', Header);