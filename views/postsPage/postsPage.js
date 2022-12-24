

import router from '/router/index.js';

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/postsPage/postsPage.html`, false);
ajax.send();
// template.innerHTML += ajax.responseText;

class PostsPage extends HTMLElement {
    
    constructor() {
        super();
        // this.template = ajax.responseText;
    }
    connectedCallback() {
        // this.innerHTML= this.template;
        this.onInit();
    }
    onInit() {
        console.log(router);
        // AppComponents.getComponents().forEach(component => {
        //     window.customElements.define(component.name, component.class);
        // });
        // window.customElements.define('app-router', RouterComponent);
        // only hash
        window.onhashchange = (currentHash) => this.onHasChange(currentHash);
        // this.renderView();
    }
    onHasChange(currentHash){
        console.log(router);

        // console.log(currentHash);
        // this.updateHistory(currentHash);
        this.renderView();
    }
    renderView() {
        // const route = this.router.getCurrentRoute();
        
        this.innerHTML ='';

        // this.appendChild( new route.component() );
    }
}


export default PostsPage;