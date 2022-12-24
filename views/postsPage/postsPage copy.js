

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/postsPage/postsPage.html`, false);
ajax.send();
// template.innerHTML += ajax.responseText;

class PostsPage extends HTMLElement {
    
    constructor() {
        super();
        // console.log(template);
        // this.template = template;
        this.template = ajax.responseText;
        // console.log(this.template);
        // this.render = this.render.bind(this);
        // this.render();
    }
    getTemplate(){
        return this.template;
    }
    // connectedCallback() {
    //     // this.innerHTML= this.template;
    //     // this.innerHTML= this.render();
    // }
}


export default PostsPage;