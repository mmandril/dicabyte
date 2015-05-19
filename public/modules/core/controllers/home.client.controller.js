(function(){
  'use strict';

  angular.module('core').controller('HomeController', HomeController);

  function HomeController ($scope, $location, ProdutoService, CategoriaService, SubCategoriaService) {
    
    var produtoService = ProdutoService;
    $scope.showProgress = true;

    produtoService.total()
    .success(function(data){
      $scope.totalProdutos = data;
      $scope.showProgress = false;
    })
    .error(function(err){
      console.log(err);
      $scope.showProgress = false;
    });

    $scope.init = function() {
        var catService = CategoriaService;
        catService.find()
        .success(function(data){
          $scope.categorias = data;
        })
        .error(function(err){
          console.log('Error : ' + err);
        });        
      };

      $scope.carregaSub = function(cat) {
        var subCatService = SubCategoriaService;
        subCatService.find(cat)
        .success(function(data){
          var arraySub = '.subCategorias.' + cat._id;
          $scope[arraySub] = data;
        })
        .error(function(err){
          console.log('Error : ' + err);
        });
      };

      $scope.pegaSubList = function(idCat) {
        var arraySub = '.subCategorias.' + idCat;
        return $scope[arraySub];
      };
  }

  HomeController.$inject = ['$scope', '$location', 'ProdutoService', 'CategoriaService', 'SubCategoriaService'];
})();
