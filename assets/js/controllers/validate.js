angular.module('ValidationMdl', ['validateService'])

	// inject the Todo service factory into our controller
	.controller('ValidationCtrl', ['$scope','validateSrv', function($scope, validateSrv) {
		
		
		$scope.enable=false;
		$scope.email="";
		

		
		
		$scope.StringValidate = function (email) {
			validateSrv.isvalit(email)
				.success(function(data) {
					$scope.validationreponse = data; 
				});

		}
		
		$scope.gettimerCount = function () {
			
			validateSrv.timerCount().success(function(data) {
				$scope.timerCount = data; 
			});
	

		}
		
		$scope.getIPtimercount = function () {
			
			validateSrv.IPtimercount().success(function(data) {
				$scope.IPtimercount = data; 
			});
	

		}
		
		
		$scope.mxValidate = function (email) {
			validateSrv.mxvalit(email)
				.success(function(data) {
					$scope.mxvalidationreponse = data;
					if($scope.mxvalidationreponse[0].value == 'true'){$scope.smtpValite (email);}
					if($scope.mxvalidationreponse[0].value == 'false'){$scope.enable=false; }
				});

		}
		
		$scope.smtpValite = function (email) {
			
			
			validateSrv.smtpvalit(email)
				.success(function(data) {
					
					$scope.smtpvalidationreponse = data; 
					$scope.gettimerCount()
					$scope.getIPtimercount();
					$scope.enable=false;
				});

		}
		
		$scope.ckdomain = function (domain) {
			validateSrv.ckdomain(domain)
				.success(function(data) {
					$scope.domainreponse = data; 
				});

		}
		
		$scope.validate = function (email) {
			
		
			
			if(email != undefined  ){
				
				$scope.email=email;
				$scope.enable=true;
				
				$scope.StringValidate(email);
				$scope.ckdomain(email);
				$scope.mxValidate(email);
	
			}
			
			if($scope.IPtimercount[0].Times >= 10)
			{
					window.location = 'bitti.html';
			}
			
		}
		
		$scope.gettimerCount();
		$scope.getIPtimercount();
		
	}]);