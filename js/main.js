/*jslint white:true */
/*global angular */
var app = angular.module('myApp', ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partial/home.html" ,
         controller :"customersCtrl"
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
 
 
/* gallery*/
$(document).ready(function(){
$(function(){
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		})
	});

});
function myfg(ev){
           ev.preventDefault();
       };
    
/*slider*/
    
        jssor_1_slider_init = function() {

            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*responsive code end*/
        };
    /*slider ends*/
});
