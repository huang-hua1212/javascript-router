

var ajax = new XMLHttpRequest();
ajax.open("GET", `/views/mainPage/mainPage.html`, false);
ajax.send();
// template.innerHTML += ajax.responseText;

class MainPage extends HTMLElement {
    
    constructor() {
        super();
        // console.log(template);
        // this.template = template;
        this.template = ajax.responseText;
        // console.log(this.template);
        // this.render = this.render.bind(this);
        // this.render();
    }
    connectedCallback() {
        this.innerHTML= this.template;
        // this.innerHTML= this.render();
    }
    // render() {
    //     this.innerHTML = this.template;
    // }
    render(){
        const rootArticle = document.createElement('article');
        rootArticle.innerHTML= `
            <input type="checkbox" name="check" />
            <h1 class='item-title'>今天晚上公司聚餐</h1>
            <div class='item-tags'>
                <span class=='item-tag'>吃飯</span>
                <span class=='item-tag'>公司</span>
            </div>
            <p class='item-descption'>吃到飽餐廳吃飯</p>
        `
        return rootArticle;
    }
}


export default MainPage;