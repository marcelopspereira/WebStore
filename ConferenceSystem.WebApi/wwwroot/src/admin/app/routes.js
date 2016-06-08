﻿(function () {
    'use strict';

    angular.module('confsys').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/account/login.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/account/login.html'
            }).when('/logout', {
                controller: 'LogoutCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/account/login.html'
            })
            .when('/signIn', {
                controller: 'SignInCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/account/signIn.html'
            });
    });
}) ();