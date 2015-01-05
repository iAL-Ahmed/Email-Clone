
angular.module('email_app.inboxEmailFactory', [])
	.factory('InboxEmailFactory', ['$http', function($http){
		var exports = {};

		exports.stuffyStuff = "inboxEmail stuff";
		exports.message = {};

		exports.send = function(message) {
			if(message) {
				console.log("Reply: " + message) //this will need to make a query to the server which places this email in the resipients inbox
			}
		};

		exports.getMessage = function(params) {
			console.log(params);
			if(params.id) {
				return $http.get('http://emailclone.azurewebsites.net/api/emails/' + params.id);
					.error(function(data) {
						console.log("Error getting message!")
					});
			}
		};

		return exports;
	}]);