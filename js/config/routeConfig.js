angular.module("lista").config(function($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "/views/contatos.html",
		controller: "listaTelefonicaController"
	});

	$routeProvider.when("/novoContato",{
		templateUrl: "/views/novoContato.html",
		controller: "novoContatoController"
	});

	$routeProvider.when("/error",{
		templateUrl: "/views/error.html"
	});

	$routeProvider.otherwise({redirectTo: "/contatos"});
});