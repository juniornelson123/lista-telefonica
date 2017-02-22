angular.module("lista").service('operadorasApi', function($http, config){
	this.getOperadora = function(){
		return $http.get(config.baseUrl+"/operadoras.json")
	}	
})