app.directive('userInfoCard', function(){
	return{
		templateUrl : 'js/templates/UserInfoCardTemplate.html',
		scope: {
		 	user : '=',
			initalCollapsed: '@collapsed'
		},
		link : function(scope, el, attr){
			scope.nextState = function(){
				scope.user.level++;
				scope.user.level = scope.user.level%4;
			};
		},
		controller: function($scope){
			$scope.collapsed = ($scope.initalCollapsed === 'true');
			$scope.collapse = function() {
				$scope.collapsed = !$scope.collapsed;
			};

			$scope.remove = function(friend){
				var idx = $scope.user.friends.indexOf(friend);
				if(idx > -1){
					$scope.user.friends.splice(idx, 1);
				}
			}
		}
	}
});