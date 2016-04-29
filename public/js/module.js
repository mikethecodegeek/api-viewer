'use strict';

var app = angular.module('routerApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/html/contact.html',
            controller: 'contractCtrl'
        })

        $urlRouterProvider.otherwise('/');

})
