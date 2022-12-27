var ajax = new XMLHttpRequest();
ajax.open("GET", `./views/mainPage/mainPage.html`, false);
ajax.send();

class MainPage {
    
    constructor() {
        this._template = ajax.responseText;
            // _template.set(this, name);
    }
    // _template = ajax.responseText;
    getTemplate() {
        // return this._template;
        return Object.getOwnPropertyNames(this);
    }
    get template() {
        // return this._template;
        // this._template =  ajax.responseText;
        return  this._template;
    }
    // getTemplate(){
    //     return ajax.responseText;
    //     // return this;
    // }
    set template(c) {
        this._template = ajax.responseText;
        // this._template = 123;

        // console.log(this._template);
    }
    init() {
        $('#next').on('click', (e) => {
            console.log('main page click success!!!');
            window.routerInstance.navigate({ name: 'posts-page' })
            // window.routerInstance.navigate('posts-page');
        })
    }
}


export default MainPage;