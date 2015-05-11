(function(){
  'use strict';

  angular.module('core').controller('HomeController', HomeController);

  function HomeController ($scope, CategoriaService, $location, SubCategoriaService) {
    $scope.find = function() {
      var catService = CategoriaService;
      $scope.showProgress = true;
      catService.find()
      .success(function(data){
        $scope.categorias = data;
        $scope.showProgress = false;
      })
      .error(function(err){
        console.log('Error : ' + err);
        $scope.showProgress = false;
      });        
    };

    $scope.carregaSub = function(cat) {
      var subCatService = SubCategoriaService;
      $scope.showProgress = true;
      subCatService.find(cat)
      .success(function(data){
        var arraySub = '.subCategorias.' + cat._id;
        $scope[arraySub] = data;
        $scope.showProgress = false;
      })
      .error(function(err){
        $scope.showProgress = false;
      });
    };

    $scope.pegaSubList = function(idCat) {
      var arraySub = '.subCategorias.' + idCat;
      return $scope[arraySub];
    };
  }

  HomeController.$inject = ['$scope', 'CategoriaService', '$location', 'SubCategoriaService'];
})();
