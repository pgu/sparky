'use strict';

angular.module('sparkyClient', ['ui.bootstrap', 'ngAnimate', 'angular-loading-bar'])

  .constant('HINTS',
  {
    week_nb: 4,
    city: 'Salt Lake City',
    words_nb: 7
  })

  .constant('API_URL', 'https://whereissparky.apispark.net/v1')

  .controller('MainCtrl', function ($scope, API_URL, HINTS, $http, $q, $location, $timeout, $window) {

    $scope.hints = HINTS;

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

    $scope.selected_words = [];

    $scope.addWord = function(w) {
      $scope.selected_words.push(w);
    };

    $scope.removeWordByIdx = function(idx) {
      $scope.selected_words.splice(idx, 1);
    };

    $scope.answer = {};

    $scope.$watch('selected_words', function () {

      $scope.answer.sequence = _.map($scope.selected_words, function (sw) {
        return sw.identifier
      }).join(',');

    }, true);



    $scope.answer_is_done = false;

    $scope.sendAnswer = function () {
      $http.post(answers_url, $scope.answer)
        .then(function () {
          $scope.answer_is_done = true;
          $timeout(function () {
            $scope.answer_is_done = false;
          }, 2000);
        });
    };

    $scope.isFormDisabled = function () {

      var hasNoEmail = _.isEmpty($scope.answer.email);
      var hasNotWordsNb = $scope.selected_words.length !== HINTS.words_nb;

      var isDisabled = hasNotWordsNb || hasNoEmail;
      return isDisabled;
    };

  });



