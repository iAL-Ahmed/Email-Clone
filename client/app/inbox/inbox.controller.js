angular.module('email_app.inboxController', [])

.controller('inboxController',['$scope', 'InboxFactory', function($scope, InboxFactory){
	$scope.title = InboxFactory.stuff;
	
	$scope.getMessages = InboxFactory.getMessages()
		.then(function(stuff) {
			console.log("Request success!", stuff);
			// $scope.emails = stuff;// this will need to change. their example is wrong
		});


}])