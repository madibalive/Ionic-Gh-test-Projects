// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('projectM', ['ionic'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
         .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl'
            })
            
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/homepage/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

            .state('app.activity', {
                url: '/activity',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/activity/activity.html',
                        controller: 'activityCtrl'
                    }
                }
            })

            .state('app.discover', {
                url: '/discover',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/discover/discover.html',
                        controller: 'discoverCtrl'
                    }
                }
            })

            .state('app.preference', {
                url: '/preference',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/preference/preference.html',
                        controller: 'preferenceCtrl'
                    }
                }
            })

           
    

        // .state('app.single', {
        //   url: '/playlists/:playlistId',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/playlist.html'
        //     }
        //   }
        // });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/discover');
    });