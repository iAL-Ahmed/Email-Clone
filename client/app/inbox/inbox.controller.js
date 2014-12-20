angular.module('email_app.inboxController', [])

.controller('inboxController',['$scope', 'InboxFactory', function($scope, InboxFactory){
	$scope.title = InboxFactory.stuff;

	$scope.goToMessage = InboxFactory.goToMessage;
	$scope.deleteMessage = InboxFactory.deleteMessage;

	//All other functions should be a straight up call.
	InboxFactory.getMessages
		.then( function(result){
			InboxFactory.messages = result;
			$scope.emails = InboxFactory.messages.data;
			console.log($scope.emails)
		})

}])