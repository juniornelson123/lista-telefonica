angular.module("lista").config(function ($httpProvider) {
	$httpProvider.interceptors.push("errorInterceptor");
});