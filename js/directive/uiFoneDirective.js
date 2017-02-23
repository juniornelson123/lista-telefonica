angular.module("lista").directive('uiFone',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict: "A",
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, $element, $attr, controller) {
			var _formatNumber = function(number){
				fone = number.replace("/[^0-9]+g/","");
				if (fone.length > 4) {
					fone = fone.substring(0,4)+"-"+fone.substring(4);
				}

				return fone;
			} 

			$element.bind("keyup", function(){
				controller.$setViewValue(_formatNumber(controller.$viewValue));
				controller.$render();
			});	
		}
	};
});