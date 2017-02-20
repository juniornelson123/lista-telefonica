//instanciando modulo & criando controller
		angular.module("lista").controller('listaTelefonicaController', function($scope,$http){
			$scope.app = "Lista Telefonica"

			$scope.contatos = []
				

			$scope.operadoras = []

			var carregarContatos = function(){
				$http.get("http://127.0.0.1:3000/contatos.json").then(function(data) {
    				if(data.status == 200){
						$scope.contatos = data.data
					}
 				 },function (data) {
 				 	$scope.messageError = "Aconteceu um erro ao carregar contatos"
 				 })
				
			}


			var carregarOperadoras = function(){
				$http.get("http://127.0.0.1:3000/operadoras.json").then(function(data) {
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
				 $http.post("http://127.0.0.1:3000/contatos.json", {'contato' : contato }).then(
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