'use strict';

angular.module('sparkyClient', [])

//  .config(function ($httpProvider) {
//
//    function isCallToGitHub (config) {
//      return config.url.indexOf('https://api.github.com') === 0;
//    }
//
//    $httpProvider.interceptors.push(
//      function ($q) {
//        return {
//          request: function (config) {
//
////            if (isCallToGitHub(config)) {
////              config.headers.accept = 'application/vnd.github.v3+json';
////            }
//
//            return config;
//          },
//          responseError: function (rejection) {
//
////            if (isCallToGitHub(rejection.config)) {
////
////              var headers = rejection.headers();
////              var reset = headers['x-ratelimit-reset'] || '';
////
////              var newError = {
////                url: rejection.config.url,
////                message: rejection.data.message,
////                documentation_url: rejection.data.documentation_url,
////                limit: headers['x-ratelimit-limit'] || '',
////                remaining: headers['x-ratelimit-remaining'] || '',
////                reset: reset ? moment.unix(reset).format('llll') : ''
////              };
////
////              // avoid duplicates
////              var url2error = _.indexBy(errorHelper.apiCallErrors, 'url');
////              url2error[newError.url] = newError;
////              errorHelper.apiCallErrors = _.values(url2error);
////            }
//
//            return $q.reject(rejection);
//          }
//        };
//      }
//    );
//
//  })

  .controller('MainCtrl', function ($scope, $http, $q, $location, $timeout, $window) {


    console.info('test');

      var url = 'https://whereissparky.apispark.net/v1';
      var url_pics = url + '/SparkyCampaign/';
      var url_words = url + '/words/';
      var url_answers = url + '/answers/';

//      $http.get(url_pics)
//        .then(function (res) {
//          console.log(res.data);
//
//          var pics = res.data;
//          _.each(pics, function(pic) {
//             $http.get(url_pics + pic.name)
//               .then(function(res) {
//
//               });
//          });
//
//        });


//    $http.get(url_words)
//      .then(function(res) {
//        console.log(res.data);
//      })

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



