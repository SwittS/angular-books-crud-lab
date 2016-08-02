angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

  console.log("BooksShowController Online!");


BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
}
