'use strict';
var app = angular.module('routerApp');

//load in indexhtml

app.controller('homeCtrl', function(Show, $scope) {
    //console.log('homeCtrl!')
    Show.getAll()
    .then(show => {
        $scope.show = show;

        });
        Show.getSeasons()
        .then(show => {
        //  console.log(show);
            $scope.seasons = show.data;
            });
});

app.controller('listCtrl', function(Show, $state, $q, $scope) {

  Show.getEpisodes()
  .then(show => {
     $scope.seasonFilter =$state.params.season;
      $scope.episodes = show.data;


  })



})



app.controller('detailCtrl', function($scope, Show, $state) {
  // console.log($state.params.ep);
  //  console.log($state.params.season);
    Show.getById($state.params.ep, $state.params.season)
    .then(show => {
    //  console.log(show);
       $scope.episodes = show;
      //  console.log(show);

});
});
