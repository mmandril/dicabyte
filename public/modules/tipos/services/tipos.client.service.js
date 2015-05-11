(function(){
  'use strict';

  angular.module('tipos').service('TipoService', TipoService);

  function TipoService($http) {
    var urlBase = 'api/tipos/';

    this.find = function(idSubcategoria) {
      return $http.get(urlBase+idSubcategoria);
    };     
  }

  TipoService.$inject = ['$http'];

  angular.module.exports = TipoService;
})();

