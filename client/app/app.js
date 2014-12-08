angular.module('email_app', [
	'ui.router',
	'email_app.inboxController',
	'email_app.inboxFactory'
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('inbox'); //define initiail load and fallback url

	$stateProvider //to be defined
		.state('inbox', {
			url: '/inbox',
			templateUrl: 'app/inbox/inbox.tpl.html',
			controller: 'inboxController'
		})
		.state('inboxEmail', {
			url: '/inbox/email/:id',
			templateUrl: 'inboxEmail/inboxEmail.tpl.html',
			controller: 'inboxEmailController'
		})

}])