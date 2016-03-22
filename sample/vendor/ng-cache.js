(function() {

  angular.module('ng-cache', ['ngCookies'])
    .factory('$cache', function($cookies, $interval) {
      $storage = $cookies.getObject('cached') || {};
        // # initialize storage to existing data or empty object

      $interval(function() {
        if( $cookies.getObject('cached') !== $storage ) $cookies.putObject('cached', $storage);
      }, 500); // # run integrity check on interval

      return $storage;
    });

})();
