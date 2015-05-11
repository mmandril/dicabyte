(function(){
  'use strict';

  angular.module('categorias').service('CategoriaService', CategoriaService);

  function CategoriaService($http) {
      var urlBase = 'api/categorias';
      this.find = function() {
        return $http.get(urlBase);
      };      
    }

    CategoriaService.$inject = ['$http'];

    angular.module.exports = CategoriaService;

})();

