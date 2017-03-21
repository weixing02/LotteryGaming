var app = angular.module("myApp", []);

app.controller("getTime", function($scope, $filter) {
  var format;  //时间格式

  $scope.time = new Date();
});
