angular.module('email_app', [
	'ui-router'
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise(); //define initiail load and fallback url

	$stateProvider //to be definedS
		.state('state', {
			url: '/state',
			templateUrl: 'app/ something...',
			controller: 'controller name'
		})

}])