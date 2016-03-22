# ng-cache
> Small, simple, and lightweight wrapper for cookie related meta and cache data.

ng-Cache is a third party, high level wrapper for the official ngCookie plugin.
The idea and goal was to bind cache data to a local object to reference to and from.

**Note:** *This project was created created with Angular 1.4.x, and will most probably not be updated in impending future.*

## Get Started

**(1)** Get ng-cache in one of the following ways:
 - clone & build this repository
 - download the release (or minified)
 - or via Bower: by running $ bower install ng-cache from your console

**(2)** Usage is simple, just include the source within your project and include **ng-cache** in your target app module.
```javascript
angular.module('myApp', ['ng-cache']);
```
Then you may proceed to use the widget/plugin via standard form,
```js
angular.module('myApp', ['ng-cache'])
  .controller('myController', function($cache) {
    $scope.data = $data = {
      visitor: ''
    };
    $data.visitor = $cache.visitor;
      // # instantiate to
    $scope.update = function() {
      $cache.visitor = $data.visitor;
    }; // # update to on invoke
  });
```
Having trouble following along? A [sample](https://github.com/neetVeritas/ng-cache/tree/master/sample) has been included with this repository.
