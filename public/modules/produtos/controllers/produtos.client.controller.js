(function(){
  'use strict';

  angular.module('produtos').controller('ProdutoController', ProdutoController);


  function ProdutoController ($scope, $stateParams, $filter, ProdutoService) {

    $scope.currentPage = 0;
    $scope.pageSize = 30;
    $scope.produtos = [];

    var produtoService = ProdutoService;
    
    $scope.showProgress = true;

    var idTipo = $stateParams.idTipo;
    
    produtoService.find(idTipo)
    .success(function(data){
      $scope.produtoList = data;
      $scope.produtos = data;
      $scope.showProgress = false;

      $scope.numberOfPages=function(){
        return Math.ceil($scope.produtos.length/$scope.pageSize);                
      };
    })
    .error(function(err){
      $scope.showProgress = false;
    });


    $scope.$watch('produto', function (produto) {
      console.log(produto);
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
  ProdutoController.$inject = ['$scope', '$stateParams', '$filter', 'ProdutoService']; 
})();
