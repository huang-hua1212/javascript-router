

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/postsPage/postsPage.html`, false);
ajax.send();

class PostsPage {
    constructor() {
        this.template = ajax.responseText;
    }
    getTemplate(){
        return this.template;
    }
    init() {
        $('#first').on('click', (e) => {
            console.log('postsPage.js click success!!!!!!');
            window.routerInstance.navigate({ name: 'main' })
        })
        
    }
    
}


export default PostsPage;