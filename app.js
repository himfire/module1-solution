(function(){
'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope){

	$scope.check = function(){
		var texta = $scope.item.split(', ').join(',');
		var textb = texta.split(', ').join(',');
		var textc = textb.split(',,').join(',');
		var len = textc.split(",");
		$scope.food = len;
		if(len.length == 0){
			$scope.message =  "Empty";
			$scope.color = "green";
		}else if(len.length < 4){
			$scope.message = "Enjoy";
			$scope.color = "green";
		}else{
			$scope.message = "This it too much!";
			$scope.color = "red";
		}
		
	}
}
})();