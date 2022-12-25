// hash routing-render

import router from '/router/index.js';

class RoutingRender extends HTMLElement {
    
    constructor() {
        super();
    }
    connectedCallback() {
        this.onInit();
    }
    onInit() {
        // only hash
        window.onhashchange = (currentHash) => this.onHasChange(currentHash);
        this.renderView(router);
    }
    onHasChange(currentHash){
        let router = window.routerInstance;
        this.renderView(router);
    }
    renderView(router) {
        // var cur_route;
        // history and hash
        // if(router.mode == 'hash'){
        //     cur_route = router.routes.find(element => {
        //         return element.path == null? ('/'== window.location.pathname) : ('#'+element.path) == window.location.hash;
        //     });
        // }else {
        //     cur_route = router.routes.find(element => {
        //         return element.path == null? ('/'== window.location.pathname) : ('#'+element.path) == window.location.hash;
        //     });
        // }

        // hash
        var cur_route = router.routes.find(element => {
            return element.path == null? ('/'== window.location.pathname) : ('#'+element.path) == window.location.hash;
        });
        var rou_ins = new cur_route.class();
        this.innerHTML = rou_ins.getTemplate();
        rou_ins.init();
    }
}

export default RoutingRender;