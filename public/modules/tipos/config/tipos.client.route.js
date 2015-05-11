(function(){
  'use strict';

  // Setting up route
  angular.module('tipos').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      // Redirect to home view when route not found
      $urlRouterProvider.otherwise('/');

      // Home state routing
       $stateProvider
       .state('tipo', {
        url: '/tipo/:idSubcategoria/list',
        templateUrl: 'modules/tipos/views/home.client.view.html',
        controller: 'TipoController'
      });
    }
  ]);
  
})();
