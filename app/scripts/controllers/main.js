'use strict';

/**
 * @ngdoc function
 * @name personalwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalwebApp
 */
angular.module('personalwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
