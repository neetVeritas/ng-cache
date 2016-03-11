(function() {

  angular.module('ng-cache', ['ngCookies'])
    .factory('$cache', function($cookies) {
      var storage = $cookies.getObject('cached') || {};
        // # set to found object or new object
      return {
        $get: function(key) {
          return storage[key] || null;
        },
        $set: function(key, val) {
          if( $cookies.getObject('cached') !== storage ) $cookies.putObject( 'cached', storage );
            // # check integrity of cookie object vs local storage
          storage[key] = val;
          $cookies.putObject('cached', storage);
        }
      };
    });

})();
