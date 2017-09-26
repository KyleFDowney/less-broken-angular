angular.module("tableDirective", [])

app.directive("tableDirective", function(){
    return{
        restrict:'E',
        templateUrl:'templates/table.html'
    }
})
