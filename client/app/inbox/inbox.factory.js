angular.module('email_app.inboxFactory', ['$http'])

.factory('inboxFactory',['$http', '$state',function($http, $state){
	var messages = [];

	var gotoMessage = function(id) { //this is only changing the url after the state has changed
		$state.go('inboxEmail', {'id': id})//may need to just replace this with sref
	}

	var getMessages = function() {
		return $http.get('json/emails.json')
			.success(function (data){
				messages = data;
			})
			.error(function (data) {
				console.log('OMG STUFF WENT WRONG', data);
			});
	}

	var deleteMessage = function (id, index) {
		messages.splice(index, 1);
	}

	return {
		gotoMessage: gotoMessage,
		getMessages: getMessages,
		deleteMessage: deleteMessage,
		messages: messages,
		stuff: "yeah stuff"
	}
}])