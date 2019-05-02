angular.module('restfulService', [])

	// super simple service
	// each function returns a promise object 
	.factory('rstflSrv', ['$http',function($http) {
		return {
			get : function(url) {
				return $http.get(url);
			},
			create : function(url,todoData) {
				return $http.post(url, todoData);
			},
			delete : function(url, id) {
				return $http.delete(url + '/' + id);
			}
		}
	}]);