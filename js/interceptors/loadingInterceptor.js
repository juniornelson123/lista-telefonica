angular.module("lista").factory('loadingInterceptor', function($q, $rootScope,$timeout){
	return {
		request: function(config){
			$rootScope.loading = true;
			return config
		},

		requestError: function(rejection){
			$rootScope.loading = false;
			return $q.rejection(rejection)
		},

		response: function(response){
			$rootScope.loading = false;
				
			return response
		},

		responseError: function(rejection){
			$rootScope.loading = false;
			return $q.rejection(rejection)
		}
	};
})