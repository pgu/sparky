'use strict';

angular.module('sparkyClient', ['ui.bootstrap', 'ngAnimate'])

  .constant('API_URL', 'https://whereissparky.apispark.net/v1')
  
  .controller('MainCtrl', function ($scope, API_URL, $http, $q, $location, $timeout, $window) {

      $scope.pics_url = API_URL + '/SparkyCampaign/';
      var words_url = API_URL + '/words/';
      var answers_url = API_URL + '/answers/';

/*
      $http.get($scope.pics_url)
        .then(function (res) {
          $scope.pics = res.data.list;
        });

      $http.get(words_url)
        .then(function (res) {
          $scope.words = res.data.list;
        });
*/

  $scope.toggleWord = function(w) {
    w.is_selected = !w.is_selected;
  }

  $scope.pics = [{name: 'PaloAlto.png'},{name: 'SanFrancisco.png'},{name: 'Chicago.png'}];
  $scope.words = [
     {value:'Sparky',identifier:'0485f5a1'},{value:'is',identifier:'0485f5a2'},
     {value:'on',identifier:'0485f5a3'},{value:'line',identifier:'0485f5a4'},
     {value:'over',identifier:'0485f5a5'},{value:'grey',identifier:'0485f5a6'},
     {value:'big',identifier:'0485f5a7'},{value:'pavement',identifier:'0485f5a8'},
     {value:'wSparky',identifier:'10485f5a1'},{value:'wis',identifier:'10485f5a2'},
     {value:'won',identifier:'10485f5a3'},{value:'wline',identifier:'10485f5a4'},
     {value:'wover',identifier:'10485f5a5'},{value:'wgrey',identifier:'10485f5a6'},
     {value:'wbig',identifier:'10485f5a7'},{value:'wpavement',identifier:'10485f5a8'}
   ];


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



