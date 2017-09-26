var app = angular.module("challengeApp", ['navBar','router', 'tableDirective']);

app.controller("mainCtrl", function ($scope) {
    $scope.model = 5
});
