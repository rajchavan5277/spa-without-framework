import { html } from "lit-html";

export default class Dashboard {
    getHtml() {
        return html`
            <h1>Welcome To DashBOard</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
            <button>Click</button>
        `;
    }
}