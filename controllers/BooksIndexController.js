angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

  console.log("BooksIndexController Online!");


BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
}
