(function(){

  angular.module('fooApp', ['ng-cache'])
    .controller('mainCtrl', function($cache, $scope){
      $scope.data = $data = {
        visitor: ''
      };
      $data.visitor = $cache.visitor;
        // # instantiate to
      $scope.update = function() {
        $cache.visitor = $data.visitor;
      }; // # update to on invoke
    });

})();
