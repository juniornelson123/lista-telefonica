angular.module("lista").factory('contatosApi', function($http, config){
	var _getContatos = function(){
		return $http.get(config.baseUrl+"/contatos.json")
	}

	var _getDetalhesContato = function(id){
		return $http.get(config.baseUrl+"/contatos/"+id+".json")
	}

	var _saveContatos = function(contato){
		return $http.post(config.baseUrl+"/contatos.json", {'contato' : contato })
	}

	return {
		getContatos: _getContatos,
		saveContatos: _saveContatos,
		detailContato: _getDetalhesContato
	}
})