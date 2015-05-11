(function(){
  'use strict';

  angular.module('tipos').controller('TipoController', TipoController);


  function TipoController ($scope, TipoService, $stateParams, $filter, SubCategoriaService) {

    var tipoService = TipoService;
    var subCategoriaService = SubCategoriaService;
    
    $scope.showProgress = true;

    var idSubcategoria = $stateParams.idSubcategoria;

    subCategoriaService.findOne(idSubcategoria)
    .success(function(data){
      $scope.subCategoria = data;
    })
    .error(function(err){
      console.log(err);
    });
    
    tipoService.find(idSubcategoria)
    .success(function(data){
      $scope.tipos = data;
      $scope.showProgress = false;
    })
    .error(function(err){
      $scope.showProgress = false;
    });
  }   
  TipoController.$inject = ['$scope', 'TipoService', '$stateParams', '$filter', 'SubCategoriaService'];  

})();
