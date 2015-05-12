(function(){
  'use strict';

  angular.module('core').controller('HomeController', HomeController);

  function HomeController ($scope, $location, ProdutoService) {
    
    var produtoService = ProdutoService;

    produtoService.total()
    .success(function(data){
      $scope.totalProdutos = data;
    })
    .error(function(err){
      console.log(err);
    });
  }

  HomeController.$inject = ['$scope', '$location', 'ProdutoService'];
})();
