(function (window, angular, undefined) {

	var app = angular.module('xiLodgingUI', [])
	.config(['$httpProvider', function($httpProvider) {
	        $httpProvider.defaults.useXDomain = true;
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    	}
	])
	.controller('MyController', ['$scope', '$http', function($scope,$http){
		$scope.groupDetailesData = false;
		$scope.groupsData = false;
		$scope.createGroupData = false;

		$scope.getGroupsToCreate = function() {   
			
			$scope.loader = true;

			console.log("Clicked on getGroupsToCreate ");
			
			$http.get("http://localhost:9008/disembarkation/creategroups/"+$scope.disembarkation.shipCode+"/"+ $scope.disembarkation.portLocation +"/"+$scope.disembarkation.arrivalDate).
		        success(function(response, status, headers, config){
		        	$scope.groupsData = true;
		        	$scope.createGroupData = true;
		        	$scope.groupDetailesData = false;

		        	$scope.data2 = response;

		        	$scope.loader = false;
		        	console.log("Successfuly got data to create groups :" + JSON.stringify($scope.data2));
		        }).
		        error(function(response, status, headers, config) {
		        	console.log("Error occured to get all groups :" + response);
					$scope.loader = false;
		        });
	    }  

	    $scope.getAllGroups = function(){  

	    	$scope.loader = true;

	    	console.log("Getting all groups by "+ "http://localhost:9008/disembarkation/getGroups/"+$scope.disembarkation.shipCode+"/"+$scope.disembarkation.portLocation+"/"+$scope.disembarkation.arrivalDate+ $scope.disembarkation.shipCode + $scope.disembarkation.portLocation + $scope.disembarkation.arrivalDate);

		   $http.get("http://localhost:9008/disembarkation/getGroups/"+$scope.disembarkation.shipCode+"/"+$scope.disembarkation.portLocation+"/"+$scope.disembarkation.arrivalDate)
			// $http.get("http://localhost:9008/disembarkation/getGroups/FLL/RP/2014-11-11T01:01:01")
		        .success(function(response, status, headers, config){
		        	$scope.groupsData = true;
		        	$scope.groupDetailesData = true;
		        	$scope.createGroupData = false;
		        	$scope.data = response;
		        	
		        	$scope.loader = false;
		        	console.log("Successfuly got all groups :" + JSON.stringify($scope.data));
		        }).
		        error(function(response, status, headers, config) {
		        	console.log("Mobile exists :" + response);
					$scope.loader = false;
		        });
		}

	  

		$scope.createGroup = function( disembarkationGroup){   
			
			$scope.loader = true;

			$scope.groupData = {
					"templateName": "Template1",
		    		"templateId" : "FLLRP",
		    		"groupName": disembarkationGroup.groupName,
		    		"disembarkationStartDateTime": disembarkationGroup.disembarkationStartDateTime,
    				"disembarkationEndDateTime": disembarkationGroup.disembarkationEndDateTime, 
		    		"tagColor": disembarkationGroup.tagColor,
		    		"tagCapacity": disembarkationGroup.tagCapacity,
		    		"meetingLocation": disembarkationGroup.meetingLocation,
		    		"gangwayAssignment": disembarkationGroup.gangwayAssignment,
		    		"guestUIID": disembarkationGroup.guestUIID
			};		

			console.log("Create Group Data is " + JSON.stringify($scope.groupData) );
			
			

			$http.post('http://localhost:9008/disembarkation/createGroup', $scope.groupData).
                success(function(response, status, headers, config){
                    $scope.loader = false;
					alert("Successfuly created group  :" + response);
                }).
                error(function(data, status, headers, config) {
                    console.log("Error got is " +  data + " Status is " + status);
					$scope.loader = false;
                });
	    }

		$scope.createGroup2 = function() {  

			console.log("Create Group Data is "+  JSON.stringify($scope.disembarkationGroup) +  " ====" +JSON.stringify($scope.groupData) );

			$http.post('http://localhost:9008/disembarkation/createGroup', $scope.disembarkationGroup).
                success(function(response, status, headers, config){
                    alert("Successfuly created Data  :" + response);
                }).
                error(function(data, status, headers, config) {
                    console.log("Error got is " +  data + " Status is " + status);
                });
	    }

	}]);

})(window, window.angular, void 0);