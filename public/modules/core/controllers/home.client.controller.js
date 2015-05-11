(function(){
  'use strict';

  angular.module('core').controller('HomeController', HomeController);

  function HomeController ($scope, CategoriaService, $location, SubCategoriaService) {
    
  }

  HomeController.$inject = ['$scope', 'CategoriaService', '$location', 'SubCategoriaService'];
})();
