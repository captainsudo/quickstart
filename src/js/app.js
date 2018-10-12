'use strict';

angular.module('App',['main']);

angular.module('main',[]);

 angular.module('main').controller('mainController',function($scope){
    // Controller body
    $scope.welcome = 'This is just the beginning.';
});