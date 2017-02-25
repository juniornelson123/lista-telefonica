angular.module("lista").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 404) {
				$location.path("/error");
			}

			if (rejection.status === 500) {
				$location.path("/errorInternal")
			}
			return $q.reject(rejection);
		}

	};
});