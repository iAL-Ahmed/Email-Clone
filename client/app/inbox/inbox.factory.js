angular.module('email_app.inboxFactory', [])

.factory('InboxFactory',['$http', '$state', '$templateCache',function($http, $state, $templateCache){
	var exports = {};
	exports.messages= [];

	exports.goToMessage = function(id) { //this is only changing the url after the state has changed
		console.log('id: ', id)
		$state.go('inboxEmail', {'id': id}, {inherit:false})//may need to just replace this with sref
	}

	exports.getMessages = function() {
		return $http.get('http://emailclone.azurewebsites.net/api/emailList')//'127.0.0.1:3000/api/emailList' for local testing
			.error(function (data) {
				console.log('OMG STUFF WENT WRONG', data);
			});
	}()

	exports.deleteMessage = function (id, index) { //this is a local solution and should be retooled for server
		messages.splice(index, 1);
	}

	exports.stuff = "yeah stuff";

	return exports;
}])