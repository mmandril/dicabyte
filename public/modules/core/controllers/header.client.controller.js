(function(){

	'use strict';

	angular.module('core').controller('HeaderController', HeaderController);	

  function HeaderController($scope, Authentication, Menus, CategoriaService, SubCategoriaService) {
      $scope.authentication = Authentication;
      $scope.isCollapsed = false;
      $scope.menu = Menus.getMenu('topbar');

      $scope.toggleCollapsibleMenu = function() {
        $scope.isCollapsed = !$scope.isCollapsed;
      };

      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess', function() {
        $scope.isCollapsed = false;
      });

      $scope.init = function() {
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


  HeaderController.$inject = ['$scope', 'Authentication', 'Menus', 'CategoriaService', 'SubCategoriaService'];


  angular.module('core').exports = HeaderController;
})();


