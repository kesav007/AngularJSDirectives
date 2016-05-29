/**
 * Created by Manasavi on 5/25/2016.
 */
app.directive('stateDisplay', function(){
    return {
        link : function(scope, el, attrs){
            var parms = attrs['stateDisplay'].split(' ');
            var linkVar = parms[0];
            scope.$watch(linkVar, function(newVal){
                el.css('background-color', parms[newVal + 1]);

/*                switch (colorVal){
                    case 0:
                        el.css('background-color', 'white');
                        break;
                    case 1:
                        el.css('background-color', 'yellow');
                        break;
                    case 2:
                        el.css('background-color', 'red');
                        break;
                }
  */
            });
        }
    }
});