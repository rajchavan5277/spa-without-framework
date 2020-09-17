import { html, render } from 'lit-html';
import './header.scss';
export default class Header {
    static getView() {
        return html`
        <nav class="background-white">
          <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
              <li><a href="/" class="nav__link" data-link>HOME</a></li>
              <li><a href="/products" class="nav__link" data-link>SHOP</a></li>
              <li><a href="/magazine" class="nav__link" data-link>MAGAZINE</a></li>
              <li><a href="/magazine132" class="nav__link" data-link>MAGAZINE</a></li>
            </ul>
            <ul class="right hide-on-med-and-down">
              <li><a href="#"><i class="material-icons left">search</i></a></li>
              <li><a href="#"><i class="material-icons right">view_module</i></a></li>
            </ul>
          </div>
        </nav>`;
    }
}
render(Header.getView(), document.querySelector("#app-header"));