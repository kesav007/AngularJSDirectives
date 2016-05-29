app.directive('userInfoCardAddress', function(){
	return {
		templateUrl:'js/templates/UserInfoCardAddress.html',
		scope: true,
		controller : function($scope){
			$scope.collapsed = false;		
			$scope.expandAddress = function(){
				$scope.collapsed = false;
			};
			$scope.collapseAddress = function(){
				$scope.collapsed = true;
			};
		}
	}
});