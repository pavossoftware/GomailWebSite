angular.module('validateService', [])

	.factory('validateSrv', ['$http',function($http) {
		return {
			isvalit : function(email) {
				return $http.get('http://maildogrulama.com/api/stringvalidate/' + email);
			},
			ckdomain : function(domain) {
				return $http.get('http://maildogrulama.com/api/checkdisposableDomains/' + domain);
			},
			mxvalit : function(domain) {
				return $http.get('http://maildogrulama.com/api/mxvalidate/' + domain);
			},
			smtpvalit : function(domain) {
				return $http.get('http://maildogrulama.com/api/smtpvalidate/' + domain);
			},
			timerCount : function() {
				return $http.get('http://maildogrulama.com/api/timerCount/',{headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
			},
			IPtimercount : function() {
				return $http.get('http://maildogrulama.com/api/IPtimercount/');
			}
		}
	}]);