(function(){
  'use strict';

  angular.module('produtos').controller('ProdutoController', ProdutoController);


  function ProdutoController ($scope, $stateParams, $filter, ProdutoService, TipoService) {

    $scope.currentPage = 0;
    $scope.pageSize = 30;
    $scope.produtos = [];
    $scope.produtoList = [];

    var produtoService = ProdutoService;
    var tipoService = TipoService;
    
    $scope.showProgress = true;

    var idSubCat = $stateParams.idSubCat;
    tipoService.find(idSubCat)
    .success(function(tipoList){
      for(var i = 0; i < tipoList.length; i++) {
        produtoService.find(tipoList[i]._id)
        .success(function(data){
          for(var j = 0; j < data.length; j++) {
            $scope.produtoList.push(data[j]);
            $scope.produtos.push(data[j]);
            $scope.showProgress = false;
          }

          $scope.numberOfPages=function(){
            return Math.ceil($scope.produtos.length/$scope.pageSize);                
          };
        })
        .error(function(err){
          $scope.showProgress = false;
        });
      }
    })
    .error(function(err){

    });
    


    $scope.$watch('produto', function (produto) {
      $scope.currentPage = 0;
      $scope.produtos = $filter('filter')($scope.produtoList, {fabricante: produto.fabricante, modelo: produto.modelo, especificacao: produto.especificacao, loja: produto.loja, local:produto.local});
      
      $scope.numberOfPages=function(){
        return Math.ceil($scope.produtos.length/$scope.pageSize); 
      };
    }, true);
  }    

  angular.module('produtos').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }; 
  });
  ProdutoController.$inject = ['$scope', '$stateParams', '$filter', 'ProdutoService', 'TipoService']; 
})();
