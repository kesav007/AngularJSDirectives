/**
 * Created by Manasavi on 5/26/2016.
 */
app.directive('myClick', function($parse){
    return function(scope, el, attrs){
        var fn = $parse(attrs['myClick']);
        el.on('click', function(){
            scope.$apply(function(){
                fn(scope);
            });
        });
    }
});

app.directive('spacebarSupport', function($parse){
    return {
        restrict : 'A',
        link : function(scope, el, attrs){
            $('body').on('keypress', function(evt){
                var vidEl = el[0];
                if(evt.keyCode === 32){
                    if(vidEl.paused){
                        vidEl.play();
                    }
                    else{
                        vidEl.pause();
                    }
                }
            });
        }
    }
});

app.directive('eventPause', function($parse){
    return{
        restrict : 'A',
        /*
        scope: {
            eventPause : '&'
        },
        */
        link : function(scope, el, attrs){
            var fn = $parse(attrs['eventPause']);
            el.on('pause', function(event){
                scope.$apply(function(){
                    //scope.eventPause();
                    // you can invoke scope.handlePause but you have to know the parent function and its tightly coupled
                    fn(scope, {evt: event});
                });
            });
        }
    }
});


app.controller('innerCtrl', function($scope){
    console.log("Inner Controller Scope "  , $scope);
});

app.directive('displayBox', function(){
    return {
        restrict: 'E',
        templateUrl:'js/templates/displayBox.html',
        controller: function($scope){
            $scope.message = "Display Box Scope ";
            $scope.hidden = false;
            $scope.close = function(){
                $scope.hidden = true;
            };
            console.log("Display Box Scope " , $scope);
        },
        transclude: true,
        scope: true
    }
});

app.directive('myQuestion', function(){
    return {
        transclude: true,
        templateUrl:'js/templates/myQuestion.html',
        scope:{

        }
    }
});
