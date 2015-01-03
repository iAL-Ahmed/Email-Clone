angular.module('email_app.inboxEmailController', [])

.controller('inboxEmailController', ['$scope', '$stateParams', '$sce', 'InboxEmailFactory', function($scope, $stateParams, $sce, InboxEmailFactory) {
	$scope.reply = InboxEmailFactory.reply; //may not need this 
	$scope.reponse = "";
	$scope.send = function(){
		InboxEmailFactory.send($scope.response) //move response var to factory
	}

	$scope.stuffyStuff = InboxEmailFactory.stuffyStuff;
	console.log('state',$stateParams);
	$scope.message = InboxEmailFactory.message;

	InboxEmailFactory.getMessage($stateParams)
		.then(function(result) {			
			InboxEmailFactory.message = result.data;
			$scope.message = InboxEmailFactory.message;
			$scope.messageCont = $sce.trustAsHtml(InboxEmailFactory.message.content);
			console.log($scope.message)
		})

}])