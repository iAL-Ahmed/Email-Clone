angular.module('email_app', [
	'ui.router',
	'email_app.inboxController',
	'email_app.inboxFactory',
	'email_app.inboxEmailController',
	'email_app.inboxEmailFactory',
	'email_app.composeController',
	'email_app.composeFactory',
	])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('inbox'); //define initial load and fallback url

	$stateProvider 
		.state('inbox', {
			url: '/inbox',
			templateUrl: 'app/inbox/inbox.tpl.html',
			controller: 'inboxController'
		})
		.state('inboxEmail', {
			url: '/inbox/email/:id',
			templateUrl: 'app/inboxEmail/inboxEmail.tpl.html',
			controller: 'inboxEmailController'
		})
		.state('compose',{
			url:'/inbox/compose',
			templateUrl: 'app/compose/compose.tpl.html',
			controller: 'composeController'
		})

}])