'use strict';

var app = angular.module('routerApp');

app.service('Show',function($q, $http) {


    this.getAll = () => {
      return $q((resolve, error) => {
        $http({
            method: 'GET',
            url: 'http://api.tvmaze.com/search/shows?q=breaking-bad'
          }).then(function successCallback(response) {
            // console.log(response.data[0].show);
              resolve(response.data[0].show);
            }, function errorCallback(response) {
              console.log(response);
            });

      });
    }
    this.getEpisodes = () => {
      return $q((resolve, error) => {
        $http({
            method: 'GET',
            url: 'http://api.tvmaze.com/shows/169/episodes'
          }).then(function successCallback(response) {
             //console.log(response.data[0].show);
              resolve(response);
            }, function errorCallback(response) {
              console.log(response);
            });

      });
    }
    this.getSeasons = () => {
      return $q((resolve, error) => {
        $http({
            method: 'GET',
            url: 'http://api.tvmaze.com/shows/169/seasons'
          }).then(function successCallback(response) {
             //console.log(response);
              resolve(response);
            }, function errorCallback(response) {
              console.log(response);
            });

      });
    }

    this.getById = (ep,seas) => {
      //console.log(ep,seas);
      return $q((resolve, error) => {
        $http({
            method: 'GET',
            url: 'http://api.tvmaze.com/shows/169/episodebynumber?season='+seas+'&number='+ep // '+seas+'&number='+ep
          }).then(function successCallback(response) {
          //  console.log(response);
              resolve(response);
            }, function errorCallback(response) {
              console.log(response);
            });

      });
    }

    this.getBySeason = (season) => {
      return $q((resolve, error) => {
        $http({
            method: 'GET',
            url: 'http://api.tvmaze.com/shows/169/episodes'
          }).then(function successCallback(response) {
             console.log(season);
              resolve(response);
            }, function errorCallback(response) {
              console.log(response);
            });

      });
    }
})
