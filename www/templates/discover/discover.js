angular.module('projectM')
.controller('discoverCtrl',  function ($scope) {
	$scope.categorys = [
	{url:'http://lorempixel.com/400/200/technics',title:'Technology'},
	{url:'http://lorempixel.com/400/200/nature',title:'Science'},
	{url:'http://lorempixel.com/400/200/sports',title:'Exercise'},
	{url:'http://lorempixel.com/400/200/nightlife',title:'Musician'},
	];
})
.service('discoverService', function () {
	
});