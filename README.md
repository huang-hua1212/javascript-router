# 純 JS寫 Router
參考自: 
* [huang-hua1212/jsRouter](https://github.com/huang-hua1212/jsRouter)
* [betaWeb/Router](https://github.com/betaWeb/Router)

# Router
A Simple JavaScript history-based router class

## Getting started
Just add the `router.min.js` script on your page.
```html
<script src="path/to/router.min.js"></script>
```
or

index.php
```javascript
import router from '/router/index.js';
```
/router/index.js
```javascript
import Router from '/lib/router/index.js';
```


After, you just have to instanciate a new Router, and declare routes as follow :
```javascript
const router = new Router({ mode: 'hash' })

router.add('/', function () {
    console.log('This is the Homepage')
}, 'homepage')
```

You also can add parameters to a route :
```javascript
router.add('/posts/:id/show', function (id) {
    console.log(`This is the post #${id}`)
}, 'posts.show')
```

You can define grouped routes, with a prefix :
```javascript
router.group('posts', function () {
    router.add('/', function () {
       console.log('All the posts')
   }, 'posts.index')

    router.add('/create', function () {
       console.log('Create a post')
   }, 'posts.create')
})
```

You can, or course, navigate between all your routes :
```javascript
router.navigate({ name: 'homepage' }) // Navigate to route named 'homepage'
router.navigate('posts/create') // Navigate to route named 'posts/create'
```

### 注意順序
在相同path的狀態下，有參數(ex. :id)的放後面
ex. 正確
```
  {
    group: 'father-uri',
    path: 'son1',
    callback: function() {
      console.log('father-uri/son1 page')
    },
    name: 'fatherUri-son1'
  },
  {
    group: 'father-uri',
    path: ':id',
    callback: function(id) {
      console.log('father-uri PAGE');
      console.log('參數為: ', id);
      console.log('father-uri/:ID page')
    },
    name: 'fatherUri-son2'
  },
```
ex. 失敗，father-uri/son1 會走到 father-uri/:id那，並認為son1為:id
```
  {
    group: 'father-uri',
    path: ':id',
    callback: function(id) {
      console.log('father-uri PAGE');
      console.log('參數為: ', id);
      console.log('father-uri/:ID page')
    },
    name: 'fatherUri-son2'
  },
  {
    group: 'father-uri',
    path: 'son1',
    callback: function() {
      console.log('father-uri/son1 page')
    },
    name: 'fatherUri-son1'
  },
```



## History vs Hash
ex.
```javascript
router.group('posts', function () {
    router.add('', function () {
       console.log('All the posts')
   }, 'posts.index')

    router.add('create', function () {
       console.log('Create a post')
   }, 'posts.create')
})
```
#### URI for History
http://localhost:port/posts
http://localhost:port/posts/create


### URI for Hash
http://localhost:port/index.php#posts/
http://localhost:port/index.php#posts/create

