

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/mainPage/mainPage.html`, false);
ajax.send();

class MainPage {
    
    constructor() {
        this.template = ajax.responseText;
    }
    getTemplate(){
        return this.template;
    }
    init() {
       
        $('#next').on('click', (e) => {
            window.routerInstance.navigate({ name: 'posts-page' })
        })
    }
}


export default MainPage;