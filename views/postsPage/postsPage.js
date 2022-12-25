

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
        $('#first').on('click', function() {
            console.log(123);
        })
        // document.getElementById("first").addEventListener("click", function(){
        //     console.log("Hello World");
        // });
    }
    
}



// const PostsPage

export default PostsPage;