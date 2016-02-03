var mainApp = angular.module("mainApp", []);

mainApp.directive('imgLoad', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var fn = $parse(attrs.imgLoad); // it parse what we pass as an attr in the html into a function.
        elem.on('load', function (event) { // The load event is sent to an element when it and all sub-elements have been completely loaded.
          scope.$apply(function() { //update the bindings, but passing the event first.
            fn(scope, { $event: event });
          });
        });
      }
    };
  }]);

/*
Implementation :

HTML
<img img-load="onImgLoad($event)" src="{{img}}" alt="{{title}}" />

JS

$scope.onImgLoad = function (event) {
    // ... everything you want
}
*/