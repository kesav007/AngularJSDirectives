app.directive('userInfoCardFriend', function(){
    return{
        templateUrl : "/js/templates/UserInfoCardFriend.html",
        scope: {
            removeFriend : '&method'
        },
        controller : function($scope){
            $scope.showRemove = true;
            $scope.removing = function(){
                $scope.showRemove = false;
            }
            $scope.cancel = function(){
                $scope.showRemove = true;
            }
            $scope.confirmRemove = function(){
                $scope.removeFriend();
            }
        }
    }
});