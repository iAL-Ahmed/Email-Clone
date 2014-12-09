angular.module('email_app.inboxController', [])

.controller('inboxController',['$scope', 'InboxFactory', function($scope, InboxFactory){
	$scope.title = InboxFactory.stuff;
	// $scope.getMessages = InboxFactory.getMessages()
	// $scope.emails = InboxFactory.messages
		// .then(function(result) {
		// 	console.log("Request success!", result);
		// 	InboxFactory.messages = result.data.slice(0);
		// 	console.log(InboxFactory.messages);
		// 	//$scope.emails = InboxFactory.messages;
		// });
	InboxFactory.getMessages
		.then( function(result){
			InboxFactory.messages = result;
			$scope.emails = InboxFactory.messages;
		})

}])