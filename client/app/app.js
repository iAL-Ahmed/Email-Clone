angular.module('email_app', [
	'ui-router'
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('inbox'); //define initiail load and fallback url

	$stateProvider //to be definedS
		.state('inbox', {
			url: '/inbox',
			templateUrl: 'app/inbox/inbox.tpl.html',
			controller: 'inboxController'
		})
		.state('inboxEmail', {
			url: '/inbox/email',
			templateUrl: 'app/inboxEmail/inboxEmail.tpl.html',
			controller: 'inboxEmailController'
		})

}])