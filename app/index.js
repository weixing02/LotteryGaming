
import "./css/font-awesome.min.css";
import "angular";
import "angular-route";
import "jquery";
import "bootstrap";
import "./css/bootstrap.min.css";
import "./css/master.css";


var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/',{templateUrl: 'common/main.html'}).
    when('/about',{templateUrl: 'common/about.html'}).
    otherwise({redirectTo: '/'});
});

app.controller("getTime", function($scope, $filter) {
  var format;  //时间格式
  $scope.time = new Date();

});
