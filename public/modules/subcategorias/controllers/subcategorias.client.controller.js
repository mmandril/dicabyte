(function(){
  'use strict';

  angular.module('subcategorias').controller('SubCategoriaController', SubCategoriaController);


  function SubCategoriaController ($scope, SubCategoriaService, $stateParams) {

    var subCatService = SubCategoriaService;
    
    $scope.showProgress = true;

    var id = $stateParams.id;

    subCatService.find(id)
    .success(function(data){
      $scope.subCategoria = data;
      $scope.showProgress = false;
    })
    .error(function(err){
      $scope.showProgress = false;
    });

  }  
  SubCategoriaController.$inject = ['$scope', 'SubCategoriaService', '$stateParams'];
})();
