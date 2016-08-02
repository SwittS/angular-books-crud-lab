angular
       .module('libraryApp', ['ngRoute'])
       .controller('BooksIndexController', BooksIndexController)
       .controller('BooksShowController', BooksShowController)
       .config(config);
       
config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books/index.html',
      controller:  'BooksIndexController',
      controllerAs: 'booksCtrl'
    })
    .when('/books/:index', {
          templateUrl: '/templates/books/show.html',
          controller: 'BooksShowController',
          controllerAs: 'booksShowCtrl'
    })
      .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
