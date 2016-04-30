'use strict';

var app = angular.module('routerApp', ['ui.router', 'ngSanitize']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('list', {
            url: '/list/:season',
            templateUrl: '/html/list.html',
            controller: 'listCtrl'
        })
        .state('detail', {
            url: '/detail/:ep/:season',
            templateUrl: '/html/detail.html',
            controller: 'detailCtrl'
            // resolve: {
            //   episode: name
            // }
        })

        $urlRouterProvider.otherwise('/');

})
