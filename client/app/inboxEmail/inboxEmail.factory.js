
angular.module('email_app.inboxEmailFactory', [])
	.factory('inboxEmailFactory', ['$http', function($http){
		var exports = {};

		exports.message = {};

		exports.reply = function(message) {
			if(message) {
				console.log("Reply: " + message) //this will need to make a query to the server which places this email in the resipients inbox
			}
		};

		exports.getMessage = function(params) {
			if(params.id) {
				$http.get('json/message/' + params.id + '.json')
					.success(function(data) {
						console.log("Message recieved!", data)
					})
					.error(function(data) {
						console.log("Error getting message!")
					});
			}
		};

		return exports;
	});