angular.module('userMdl', ['restfulService','ui.bootstrap'])

	.controller('userCtrl', ['$scope','$http','rstflSrv', function($scope, $http, rstflSrv) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.users = [];


		rstflSrv.get('/auth/users')
			.success(function(data) {
				$scope.users = data;
				$scope.loading = false;
				setPagingData($scope.currentPage);
				$scope.totalItems = $scope.users.length;
			});


		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.email != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				rstflSrv.create('/auth/users',$scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.users = data; // assign our new list of todos
					});
			}
		};


		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			rstflSrv.delete('/auth/users',id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.users = data; // assign our new list of todos
				});
		};
	
		
  $scope.viewby = 10;
  $scope.totalItems = $scope.users.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show




  $scope.$watch("currentPage", function() {
    setPagingData($scope.currentPage);
  });
  
  $scope.$watch("users", function() {
    setPagingData($scope.currentPage);
  });


  function setPagingData(page) {
    var pagedData = $scope.users.slice(
      (page - 1) * $scope.itemsPerPage,
      page * $scope.itemsPerPage
    );
    $scope.aCandidates = pagedData;
  }
  
		
	}]);