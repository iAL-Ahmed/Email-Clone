angular.module('email_app.inboxEmailController', [])

.controller('inboxEmailController', ['$scope', '$stateParams', 'InboxEmailFactory', function($scope, $stateParams, InboxEmailFactory) {
	$scope.reply = InboxEmailFactory.reply;

	$scope.stuffyStuff = InboxEmailFactory.stuffyStuff;
	console.log('state',$stateParams);

	InboxEmailFactory.getMessage($stateParams)
		.then(function(result) {			
			InboxEmailFactory.message = result;
			$scope.message = InboxEmailFactory.message.data;
			console.log($scope.message)
			//may need to pass this up a level
		})

}])