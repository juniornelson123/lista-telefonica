angular.module("lista").controller('novoContatoController', function($scope, $location, operadorasApi, contatosApi){
	$scope.adicionaContato = function(contato){
				
		//$scope.contatos.push(angular.copy(contato));
		//contato.operadora = ""
		contato.operadora_id = contato.operadora.id
		contatosApi.saveContatos(contato).then(
		       function(response){
		       		delete $scope.contato
					$scope.form.$setPristine()
					$location.path("/contatos");
				
		       }, 
		       function(response){
		         
		       }
		    );
		
	}

	var carregarOperadoras = function(){
		operadorasApi.getOperadora().then(function(data) {
			if(data.status == 200){
				$scope.operadoras = data.data
				
			}
		},function (data) {
		 		$scope.messageError = "Aconteceu um erro ao carregar operadoras"
			}
		 )
		
	}	

	carregarOperadoras();

});