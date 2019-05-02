angular.module('disposableMld', ['restfulService','ui.bootstrap'])

	.controller('disposableCtrl', ['$scope','$http','rstflSrv', function($scope, $http, rstflSrv) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.domains = [];


		rstflSrv.get('/auth/disposableDomains')
			.success(function(data) {
				$scope.domains = data;
				$scope.loading = false;
				setPagingData($scope.currentPage);
				$scope.totalItems = $scope.domains.length;
			});


		$scope.createDomain = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				rstflSrv.create('/auth/disposableDomains',$scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.domains = data; // assign our new list of todos
					});
			}
		};


		$scope.deleteDomain = function(id) {
			$scope.loading = true;

			rstflSrv.delete('/auth/disposableDomains', id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.domains = data; // assign our new list of todos
				});
		};
	
		
  $scope.viewby = 10;
  $scope.totalItems = $scope.domains.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show




  $scope.$watch("currentPage", function() {
    setPagingData($scope.currentPage);
  });

  function setPagingData(page) {
    var pagedData = $scope.domains.slice(
      (page - 1) * $scope.itemsPerPage,
      page * $scope.itemsPerPage
    );
    $scope.aCandidates = pagedData;
  }
  
		
	}]);