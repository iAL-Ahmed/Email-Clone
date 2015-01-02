angular.module('email_app.inboxFactory', [])

.factory('InboxFactory',['$http', '$state',function($http, $state){
	var exports = {};
	exports.messages= [];

	exports.goToMessage = function(id) { //this is only changing the url after the state has changed
		console.log('id: ', id)
		$state.go('inboxEmail', {'id': id}, {inherit:false})//may need to just replace this with sref
	}

	exports.getMessages = function() {
		return $http.get('json/emails.json')
			.success(function (data){
				// messages = data; //not needed as is resolved in controller
				// console.log(messages);
			})
			.error(function (data) {
				console.log('OMG STUFF WENT WRONG', data);
			});
	}()

	exports.deleteMessage = function (id, index) {
		messages.splice(index, 1);
	}

	exports.stuff = "yeah stuff";

	return exports;
}])