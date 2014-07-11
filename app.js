'use strict';

angular.module('sparkyClient', ['ui.bootstrap', 'ngAnimate'])

  .constant('API_URL', 'https://whereissparky.apispark.net/v1')
  
  .controller('MainCtrl', function ($scope, API_URL, $http, $q, $location, $timeout, $window) {

      $scope.pics_url = API_URL + '/SparkyCampaign/';
      var words_url = API_URL + '/words/';
      var answers_url = API_URL + '/answers/';

      $http.get($scope.pics_url)
        .then(function (res) {
          $scope.pics = res.data.list;
        });

      $http.get(words_url)
        .then(function (res) {
          $scope.words = res.data.list;
        });

//    sparky is resting next to the Fedex box
//    0485f5a8,5afa8197,6af48f90,0ab34d09,57c84c65,4a50ee97,4b41d487,f983e6ac

/*
    $http.post(url_answers, {
      sequence: '0485f5a8,5afa8197,6af48f90,0ab34d09,57c84c65,4a50ee97,4b41d487,f983e6ac',
      email: 'guilcher.pascal@gmail.com'
    })
      .then(function(res) {
        console.log(res);
      })

*/


  });



