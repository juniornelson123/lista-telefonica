angular.module("lista").directive('uiAccordions', function(){
	return {
		controller: function($scope, $element, $attrs) {
			var accordions = []

			this.registerAccordion = function(accordion){
				accordions.push(accordion);
				//console.log("accordions");

			}

			this.closeAll = function(){
				accordions.forEach(function(accordion){
					accordion.isOpened = false;	
				});
			}
		}
	};
});

angular.module("lista").directive('uiAccordion', function(){
	
	return {
		transclude: true,
		templateUrl: 'views/uiAccordionView.html',
		require: "^uiAccordions",
		scope: {
			title: "@"
		},
		link: function($scope, $element, $attrs, controller){
			controller.registerAccordion($scope)
			$scope.open = function(){
				controller.closeAll();
				$scope.isOpened = !$scope.isOpened
			}
		}

		
	};
});