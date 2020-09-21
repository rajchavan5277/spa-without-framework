import { LitElement, html } from 'lit-element';
import './sidebar.scss';
export default class SideBar extends LitElement{
    createRenderRoot() {
        return this;
      }
    
      firstUpdated() {
        M.AutoInit();
      }

    render() {
        return html`
        <div id="slide-out" class="sidenav">
            <ul class="collection">
              <li class="collection-item avatar login-icon">
                <i class="material-icons">account_circle</i>
              </li>
              <li class="collection-item"><a href="/">HOME</a></li>
              <li class="collection-item"><a href="/shop">SHOP</a></li>
              <li class="collection-item"><a href="/magazine" class="nav__link" data-link>MAGAZINE</a></li>
              <li class="collection-item"><a href="#">LOGIN</a></li>
            </ul>
          </div>
        `
    }
    
}
customElements.define('app-sidebar', SideBar);