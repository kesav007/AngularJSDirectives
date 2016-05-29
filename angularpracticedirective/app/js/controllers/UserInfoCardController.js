app.controller('mainCtrl', function($scope){
	$scope.manju = {
		"name" : 'Manju',		
		"friends" : [
			"Kesav",
			"Vaibhav",
			"Manasvi"
		],
		level : 0
	};

	$scope.kesav = {
		"name" : 'Kesav',
		"address" : {
			"street" : '21398 Fultonham Cir',
			"city" : "Ashburn",
			"state" : "VA"
		},
		"friends" : [
			"Manju",
			"Vaibhav",
			"Manasvi"
		],
		level : 1
	};
	
	$scope.partha = {
		"name" : 'Partha',
		"address" : {
			"street" : '21398 Fultonham Cir',
			"city" : "Ashburn",
			"state" : "VA"
		},
		"friends" : [
			"Manju",
			"Kesav",
			"Vijju"
		],
		level : 2
	};

	$scope.data = {
		msg : 'I have not been clicked'
	};
	$scope.clickHandler = function(p){
		p.msg = 'I have been Clicked';
	};

	$scope.messages = [];
/*

	$scope.handlePause = function(){
		$scope.messages.push({text: 'Video Paused'});
	};
*/

	$scope.handlePause = function(e){
		console.log(e);
		$scope.messages.push({text: 'Video Paused'});
		console.log('Paused');
	};

	$scope.message = "Controller Scope Message";

	console.log("Main Ctrl Scope ", $scope);
});