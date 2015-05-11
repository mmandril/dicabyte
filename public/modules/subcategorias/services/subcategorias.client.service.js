(function(){
  'use strict';

  angular.module('subcategorias').service('SubCategoriaService', SubCategoriaService);

  function SubCategoriaService($http) {
      var urlBase = 'api/subcategorias/';

      this.find = function(cat) {
        return $http.get(urlBase+cat._id);
      };      

      this.findOne = function(idSubCat) {
        return $http.get(urlBase+'get/'+idSubCat);
      };
    }

  SubCategoriaService.$inject = ['$http'];

  angular.module.exports = SubCategoriaService;
})();

