/*jslint white:true */
/*global angular */
var app = angular.module('myApp', ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partial/home.html"
    })
     .when("/samsung", {
        templateUrl : "partial/samsung.html"
    })
      .when("/apple", {
        templateUrl : "partial/apple.html"
    })
      .when("/lenovo", {
        templateUrl : "partial/lenovo.html"
    })
      .when("/huawei", {
        templateUrl : "partial/huawei.html"
    })
      .when("/htc", {
        templateUrl : "partial/htc.html"
    })
      .when("/lg", {
        templateUrl : "partial/lg.html"
    })
      .when("/sony", {
        templateUrl : "partial/sony.html"
    })
      .when("/allphones", {
        templateUrl : "partial/allphones.html"
    })
    .when("/search", {
        templateUrl : "partial/search.html" ,
         controller :"customersCtrl"
    })
    
    .when("/specs/:id", {
        templateUrl :"partial/specs.html",
        controller :"customersCtrl"
    });
    $locationProvider.html5Mode(true);
});

app.controller('customersCtrl',  function ($scope, $http, $routeParams, $location , $rootScope) {
 
    $http.get("2ndproject.json")
        .then(function (response) {$scope.phones = response.data.phones;
                                  $scope.id = $routeParams.id; });
 $scope.result = function(Q) {$location.path("/search");
                              $rootScope.Q = Q ;
                             }
 $scope.enter =function(sth) { 
     if(sth.keyCode === 13) { $scope.result}
 }
});