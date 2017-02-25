//instanciando modulo & criando controller
		angular.module("lista").controller('listaTelefonicaController', function($scope, contatosApi, operadorasApi){
			$scope.app = "Lista Telefonica"

			$scope.contatos = []
				

			$scope.operadoras = []

			var carregarContatos = function(){
				contatosApi.getContatos().then(function(data) {
    				if(data.status == 200){
						$scope.contatos = data.data
					}
 				 },function (data) {
 				 	$scope.messageError = "Aconteceu um erro ao carregar contatos"
 				 })
				
				
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

			$scope.adicionaContato = function(contato){
				
				//$scope.contatos.push(angular.copy(contato));
				//contato.operadora = ""
				contato.operadora_id = contato.operadora.id
				 contatosApi.saveContatos(contato).then(
				       function(response){
				         carregarContatos()
				       }, 
				       function(response){
				         
				       }
				    );
				
				delete $scope.contato
				$scope.form.$setPristine()
			}

			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato
				});
			}

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			}

			$scope.ordenarPor = function(valor){
				$scope.ordemBusca = valor;
			}
				
			carregarContatos();
			carregarOperadoras();

		});