var app = angular.module('app', ['ui-notification','ngCookies',"xeditable"]);
app.controller('index',function ($scope,$interval,API,Notification) {

    //=== Vars
    $scope.asdfg = null;

    $scope.someFunc = function(item){
        Notification.success("Sent blubl")
    };

    //update every 10s, veeery inefficient
    $interval(function(){
       //update
    }, 10000);
    //
});