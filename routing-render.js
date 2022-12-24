

import router from '/router/index.js';

// var ajax = new XMLHttpRequest();
// ajax.open("GET", `/views/postsPage/postsPage.html`, false);
// ajax.send();
// template.innerHTML += ajax.responseText;

class RoutingRender extends HTMLElement {
    
    constructor() {
        super();
        // this.template = ajax.responseText;
    }
    connectedCallback() {
        // this.innerHTML= this.template;
        this.onInit();
    }
    onInit() {
        console.log(router.routes);
        console.log(window.location);
        console.log(window.location.pathname);
        const cur_route = router.routes.find(element => {
            return element.path == null? ('/'== window.location.pathname) : ('#'+element.path) == window.location.hash;
        });
        this.cur_route = cur_route;
        console.log(cur_route);
        // only hash
        window.onhashchange = (currentHash) => this.onHasChange(currentHash);
        
        this.renderView(new cur_route.class());
    }
    onHasChange(currentHash){
        const cur_route = router.routes.find(element => {
            return element.path == null? ('/'== window.location.pathname) : ('#'+element.path) == window.location.hash;
        });
        this.cur_route = cur_route;
        this.renderView(new this.cur_route.class());
    }
    renderView(cur_route) {
        // const route = this.router.getCurrentRoute();
        console.log(cur_route);
        this.innerHTML =cur_route.getTemplate();

        // this.appendChild( new route.component() );
    }
}


export default RoutingRender;