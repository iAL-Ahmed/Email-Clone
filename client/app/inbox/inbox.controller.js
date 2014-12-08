angular.module('email_app.inboxController', [])

.controller('inboxController',['$scope', 'inboxFactory', function($scope, inboxFactory){
	$scope.title = inboxFactory.stuff;
}])