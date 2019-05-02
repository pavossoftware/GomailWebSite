angular.module('usersService', [])

	// super simple service
	// each function returns a promise object 
	.factory('usersSrv', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/auth/users');
			},
			create : function(todoData) {
				return $http.post('/auth/users', todoData);
			},
			delete : function(id) {
				return $http.delete('/auth/users/' + id);
			}
		}
	}]);