(function(){
  'use strict';

  // Setting up route
  angular.module('produtos').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Redirect to home view when route not found
      $urlRouterProvider.otherwise('/');

      // Home state routing
       $stateProvider
       .state('produto', {
        url: '/produto/:idTipo/list',
        templateUrl: 'modules/produtos/views/home.client.view.html',
        controller: 'ProdutoController'
      });
    }
  ]);
  
})();
