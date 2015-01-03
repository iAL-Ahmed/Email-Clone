
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
				return $http.get('json/message/' + params.id + '.json') //params.id
					// .success(function(data) {
					// 	console.log("Message recieved!", data);
					// 	exports.message = data;//////////////////this is not needed in this case because you need to resolve the resolution in the controller.
					// 	                       //////////////////By resolving this in the controller you basically do the same thing but in the right scope.
					// })
					.error(function(data) {
						console.log("Error getting message!")
					});
			}
		};

		return exports;
	}]);