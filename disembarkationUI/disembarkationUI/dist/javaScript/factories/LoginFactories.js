(function (window, angular, undefined) {

	var app = angular.module('xiLodging', [])
	.factory("xiLodgingfactory",['$scope','$http','actionToUrlMask', function($scope,$http,actionToUrlMask){
		console.log(" RegisterCtrl Controller invoked")
		
		$scope.submit = function(){
			console.log("Hello submit method called "+ JSON.stringify($scope.citizen));
			$scope.citizen.id = 0;
			$http.post(actionToUrlMask['Citizen.register'], $scope.citizen).
	        success(function(response, status, headers, config){
	        	alert("Successfuly submited exists :" + response);
	        }).
	        error(function(response, status, headers, config) {
	        	console.log("Mobile exists :" + response);
	        });
		}
        
        $scope.login = function(){
            console.log("Login methos called" +JSON.stringify($scope.citizenLogin))
            $http.post(actionToUrlMask['Citizen.login'],$scope.citizenLogin).
                success(function(response,status,header,config){
                alert("Login got successfully")
            })
        }
	}])
	
	

})(window, window.angular, void 0);