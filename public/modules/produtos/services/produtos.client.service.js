(function(){
  'use strict';

  angular.module('produtos').service('ProdutoService', ProdutoService);

  function ProdutoService($http) {
    var urlBase = 'api/produtos/';

    this.find = function(idTipo) {
      return $http.get(urlBase+idTipo);
    };      
  }

  ProdutoService.$inject = ['$http'];

  angular.module.exports = ProdutoService;
})();

