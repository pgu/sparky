'use strict';

angular.module('sparkyClient', ['ui.bootstrap', 'ngAnimate', 'angular-loading-bar'])

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

    $http.get($scope.pics_url)
      .then(function (res) {
        $scope.pics = res.data.list;
      });

    $http.get(words_url)
      .then(function (res) {
        $scope.words = res.data.list;
      });

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



