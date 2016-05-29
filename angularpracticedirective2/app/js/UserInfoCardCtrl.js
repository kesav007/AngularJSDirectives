/**
 * Created by Manasavi on 5/29/2016.
 */
app.controller('mainCtrl', function($scope){
    $scope.data = {
        msg : 'Hello'
    };

    $scope.manju = {
        "name" : 'Manju',
        "friends" : [
            "Kesav",
            "Vaibhav",
            "Manasvi"
        ],
        level : 0
    };

    $scope.user = {
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

    $scope.knightMe = function(){
        $scope.knight = "Knight....";
    }

});