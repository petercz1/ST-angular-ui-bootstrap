// create our angular app and inject ui.bootstrap
angular.module('app', ['ui.bootstrap']).controller('mainController', function ($scope) {

    // BUTTONS ======================

    // define some random object and button values
    $scope.bigData = {};

    $scope.bigData.breakfast = false;
    $scope.bigData.lunch = false;
    $scope.bigData.dinner = false;
    // pc added this console.log
    console.log($scope.bigData);
    // COLLAPSE =====================
    $scope.isCollapsed = false;

  });