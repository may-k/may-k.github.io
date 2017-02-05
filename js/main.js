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
    $(function() {
				$('#slider').carouFredSel({
					width: '100%',
					align: false,
					items: 3,
					items: {
						width: $('#wrapper').width() * 0.15,
						height: 500,
						visible: 1,
						minimum: 1
					},
					scroll: {
						items: 1,
						timeoutDuration : 5000,
						onBefore: function(data) {
			
							//	find current and next slide
							var currentSlide = $('.slide.active', this),
								nextSlide = data.items.visible,
								_width = $('#wrapper').width();
			
							//	resize currentslide to small version
							currentSlide.stop().animate({
								width: _width * 0.15
							});		
							currentSlide.removeClass( 'active' );
			
							//	hide current block
							data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
			
							//	animate clicked slide to large size
							nextSlide.addClass( 'active' );
							nextSlide.stop().animate({
								width: _width * 0.7
							});						
						},
						onAfter: function(data) {
							//	show active slide block
							data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
						}
					},
					onCreate: function(data){
			
						//	clone images for better sliding and insert them dynamacly in slider
						var newitems = $('.slide',this).clone( true ),
							_width = $('#wrapper').width();

						$(this).trigger( 'insertItem', [newitems, newitems.length, false] );
			
						//	show images 
						$('.slide', this).fadeIn();
						$('.slide:first-child', this).addClass( 'active' );
						$('.slide', this).width( _width * 0.15 );
			
						//	enlarge first slide
						$('.slide:first-child', this).animate({
							width: _width * 0.7
						});
			
						//	show first title block and hide the rest
						$(this).find( '.slide-block' ).hide();
						$(this).find( '.slide.active .slide-block' ).stop().fadeIn();
					}
				});
			
				//	Handle click events
				$('#slider').children().click(function() {
					$('#slider').trigger( 'slideTo', [this] );
				});
			
				//	Enable code below if you want to support browser resizing
				$(window).resize(function(){
			
					var slider = $('#slider'),
						_width = $('#wrapper').width();
			
					//	show images
					slider.find( '.slide' ).width( _width * 0.15 );
			
					//	enlarge first slide
					slider.find( '.slide.active' ).width( _width * 0.7 );
			
					//	update item width config
					slider.trigger( 'configuration', ['items.width', _width * 0.15] );
				});

			});
});
