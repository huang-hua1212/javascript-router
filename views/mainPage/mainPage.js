

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/mainPage/mainPage.html`, false);
ajax.send();
// template.innerHTML += ajax.responseText;

class MainPage {
    
    constructor() {
        this.template = ajax.responseText;
    }
    getTemplate(){
        return this.template;
    }
    init() {
        // $('#first').on('click', function() {
        //     console.log(123);
        // })
        // document.getElementById("first").addEventListener("click", function(){
        //     console.log("Hello World");
        // });
        $('#next').on('click', (e) => {
            console.log(window.routerInstance);
            console.log(window.history);
            // window.history.forward(1);
            // // window.routerInstance.back();
            // window.history.pushState({},'','posts-page')  //修改浏览器中显示的url地址
            // // console.log(window.onpopstate);
            window.routerInstance.navigate({ name: 'posts-page' })
        })

        // $('#a-click').on('click', () =>{
        //     e.preventDefault()
        //     let path = e.target.getAttribute('href')  //获取超链接的href，改为pushState跳转，不刷新页面
        //     console.log(path);
        //     // window.history.pushState({},'',path)  //修改浏览器中显示的url地址
        // })
       
    }
}


export default MainPage;