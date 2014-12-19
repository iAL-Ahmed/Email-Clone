angular.module('email_app.inboxEmailController', [])

.controller('inboxEmailController', ['$scope', 'inboxEmailFactory', function($scope, inboxEmailFactory) {
	$scope.reply = inboxEmailFactory.reply;

	inboxEmailFactory.getMessage
		.then(function(result)) {
			inboxEmailFactory.message = result;
			$scope.message = inboxEmailFactory.message;
			//may need to pass this up a level
		}

	
}])