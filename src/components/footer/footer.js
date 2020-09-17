import { html, render } from 'lit-html';
import './footer.scss';
export default class Header {
    static getView() {
        return html`
        <div>Footer</div>`;
    }
}
render(Header.getView(), document.querySelector("#app-footer"));