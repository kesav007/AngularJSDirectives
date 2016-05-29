app.directive('userInfoCard', function () {
    return {
        templateUrl: 'js/templates/UserInfoCard.html',
        scope: {
            user: '=',
            initialCollapsed: '@collapsed'
        },
        controller: function ($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed;
            };

        }
    }
});
app.directive('address', function () {
    return {
        templateUrl: 'js/templates/Address.html',
        scope: true,
        controller: function ($scope) {
            $scope.addressCollapsed = false;
            $scope.addressCollapse = function () {
                $scope.addressCollapsed = !$scope.addressCollapsed;
            }
        }
    }
});

app.directive('friend', function () {
    return {
        templateUrl: 'js/templates/Friends.html',
        scope: true,
        controller: function ($scope) {
            $scope.startRemoving = false;
            $scope.removeFriend = function () {
                $scope.startRemoving = true;
            };
            $scope.remove = function (friend) {
                var index = user.friends.indexOf(friend);
                if (index > -1) {
                    user.friends.splice(index, 1);
                }
            };
            $scope.cancel = function () {
                $scope.startRemoving = false;
            }
        }
    }
});