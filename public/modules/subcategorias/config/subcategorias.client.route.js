(function(){
  'use strict';

  // Setting up route
  angular.module('subcategorias').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Redirect to home view when route not found
      $urlRouterProvider.otherwise('/');

      // Home state routing
       $stateProvider
       .state('subCategoria', {
        url: '/subCategoria/:id/list',
        templateUrl: 'modules/subcategorias/views/home.client.view.html',
        controller: 'SubCategoriaController'
      });
    }
  ]);  
})();
