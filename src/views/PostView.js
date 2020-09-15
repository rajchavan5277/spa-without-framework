export default class PostView {
    constructor(params) {
        this.postId = params.id;
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}
