# At-Image-Load-Directive

Hi guys, this is a little directive that you can apply at you img tag to throw a function when it finishes loading, 

Implementation :

HTML
<!-- <img img-load="onImgLoad($event)" src="{{img}}" alt="{{title}}" /> -->

JS

$scope.onImgLoad = function (event) {
    // ... everything you want
}

Explanation:

First it parses what we pass as an attr in the html into a function, then the load event is called and when it have been completely loaded with the scope.$apply(function() {fn(scope, { $event: event });}); we update the bindings, but passing the event first.
