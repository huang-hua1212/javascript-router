

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/404Notfound/404Notfound.html`, false);
ajax.send();

class Notfound {
    constructor() {
        this.template = ajax.responseText;
    }
    getTemplate(){
        return this.template;
    }
    init() {
        // $('#first').on('click', (e) => {
        //     console.log('postsPage.js click success!!!!!!');
        //     window.routerInstance.navigate({ name: 'main' })
        // })
        
    }
    
}


export default Notfound;