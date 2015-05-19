(function(){
  'use strict';

  // Setting up route
  angular.module('produtos').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Redirect to home view when route not found
      $urlRouterProvider.otherwise('/');

      // Home state routing
       $stateProvider       
       .state('subCatProduto', {
        url: '/produto/:idSubCat/list',
        templateUrl: 'modules/produtos/views/home.client.view.html',
        controller: 'ProdutoController'
      });
    }
  ]);
  
})();
