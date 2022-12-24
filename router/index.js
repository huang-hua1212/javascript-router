import Router from '/lib/router/index.js';
import MainPage from '/views/mainPage/mainPage.js';
import PostsPage from '/views/postsPage/postsPage.js';

console.log(PostsPage);
const routes = [
  {
    path: 'posts-page',
    callback: function() {
      console.log('posts/page');

    },
    name: 'posts-page',
    class: PostsPage,
  },
  {
    path: '/',
    callback: function() {
      console.log('main page');
      console.log(self.routerInstance);
      // document.getElementById('app').innerHTML = `<div>Main Page~~~~~~~</div>`;
      // $("#app").load("/views/mainPage.html"); 
    },
    name: 'main-page',
    class: MainPage,
  },
  {
    group: 'group1',
    path: 'show',
    callback: function() {
      console.log('group1/show');

    },
    name: 'cc'
  },
  {
    path: '/post/3/show',
    callback: function() {
      console.log('aa page')
    },
    name: 'cc'
  },
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
  {
    path: 'params-page/test',
    callback: function() {
      console.log('params-page-test');

    },
    name: 'params-page-test'
  },
  {
    path: 'params-page/:id',
    callback: function(id) {
      self.routerInstance.params = id;
      
      console.log('參數為:', id);
      console.log(self.routerInstance);

    },
    name: 'params-page-id'
  },
  {
    path: '/:id',
    callback: function(id) {
      self.routerInstance.params = id;
      
      console.log('參數為:', id);
      console.log(self.routerInstance);

    },
    name: 'aa'
  },
  
]
const router = new Router({mode: 'hash', routes});

// const router = new Router({mode: 'history', routes});
router.add('/add-new-uri/test', function () {
    console.log(`This is the post add-new-uri`)
}, 'add-new-uri')
router.group('test', function () {
  router.add('api/:id', function (id) {
      console.log("Route prefixed", id)
  })

  router.group('sub', function () {
      router.add('api/:id', function (id) {
          console.log("Route sub prefixed", id)
      })
  })
  router.add('aze', function () {
      console.log("Route aze")
  })
})

self.routerInstance = router; 

export default router;