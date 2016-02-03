var mainApp = angular.module("mainApp", []);

mainApp.directive('imgLoad', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        var fn = $parse(attrs.imgLoad);
        elem.on('load', function (event) {
          scope.$apply(function() {
            fn(scope, { $event: event });
          });
        });
      }
    };
  }]);

/*
Implementation :

HTML
<img img-load="onImgLoad($event)" class="img-loading" data-lazy="{{product.img}}" alt="{{product.title}}" />

JS

$scope.onImgLoad = function (event) {
	$scope.loaded = true;
    // ...
}*/