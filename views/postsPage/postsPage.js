

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/postsPage/postsPage.html`, false);
ajax.send();
// template.innerHTML += ajax.responseText;

class PostsPage extends HTMLElement {
    
    constructor() {
        super();
        this.template = ajax.responseText;
        // this.render = this.render.bind(this);
    }
    connectedCallback() {
        this.innerHTML= this.template;
        // this.innerHTML= this.render();
    }
}


export default PostsPage;