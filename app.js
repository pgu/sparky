'use strict';

angular.module('sparkyClient', ['ui.bootstrap', 'ngAnimate'])

  .constant('HINTS',
  {
    week_nb: 1,
    city: 'Palo Alto',
    words_nb: 2
  })

  .constant('API_URL', 'https://whereissparky.apispark.net/v1')

  .controller('MainCtrl', function ($scope, API_URL, HINTS, $http, $q, $location, $timeout, $window) {

    $scope.hints = HINTS;

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

    $scope.selected_words = [];

    $scope.toggleWord = function (w) {
      w.is_selected = !w.is_selected;

      if (w.is_selected) {
        $scope.selected_words.push(w);
      } else {
        $scope.selected_words = _.without($scope.selected_words, w);
      }

    };

    $scope.moveLeft = function (sw) {
      var old_idx = _.indexOf($scope.selected_words, sw);
      var new_idx = old_idx - 1;

      $scope.selected_words.splice(old_idx, 1); // removes sw
      $scope.selected_words.splice(new_idx, 0, sw); // inserts sw at its new idx
    };

    $scope.moveRight = function (sw) {
      var old_idx = _.indexOf($scope.selected_words, sw);
      var new_idx = old_idx + 1;

      $scope.selected_words.splice(old_idx, 1); // removes sw
      $scope.selected_words.splice(new_idx, 0, sw); // inserts sw at its new idx
    };


    $scope.answer = {};

    $scope.$watch('selected_words', function () {

      $scope.answer.sequence = _.map($scope.selected_words, function (sw) {
        return sw.identifier
      }).join(',');

    }, true);

    $scope.pics = [
      {name: 'PaloAlto.png'},
      {name: 'SanFrancisco.png'},
      {name: 'Chicago.png'}
    ];
    $scope.words = [
      {value: 'Sparky', identifier: '0485f5a1'},
      {value: 'is', identifier: '0485f5a2'},
      {value: 'on', identifier: '0485f5a3'},
      {value: 'line', identifier: '0485f5a4'},
      {value: 'over', identifier: '0485f5a5'},
      {value: 'grey', identifier: '0485f5a6'},
      {value: 'big', identifier: '0485f5a7'},
      {value: 'pavement', identifier: '0485f5a8'},
      {value: 'wSparky', identifier: '10485f5a1'},
      {value: 'wis', identifier: '10485f5a2'},
      {value: 'won', identifier: '10485f5a3'},
      {value: 'wline', identifier: '10485f5a4'},
      {value: 'wover', identifier: '10485f5a5'},
      {value: 'wgrey', identifier: '10485f5a6'},
      {value: 'wbig', identifier: '10485f5a7'},
      {value: 'wpavement', identifier: '10485f5a8'}
    ];

    $scope.sendAnswer = function () {
      $http.post(answers_url, $scope.answer)
        .then(function () {

        });
    };


  });



