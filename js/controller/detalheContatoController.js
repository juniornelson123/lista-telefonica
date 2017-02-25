angular.module("lista").controller('detalheContato', function($scope,contatosApi,$routeParams){
		var detalhesContato = function(id){
			contatosApi.detailContato(id).then(function(data){
				if(data.status == 200){
					$scope.contato = data.data;
				}
			});
		}

		detalhesContato($routeParams.id)

})
