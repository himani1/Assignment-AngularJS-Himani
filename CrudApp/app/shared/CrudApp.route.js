angular.module('CrudApp').config(function ($stateProvider , $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: '../../../CrudApp/app/components/home/home.html',
                controller: 'homeCtrl'

            })

            .state('add', {
                url: '/add',
                templateUrl: '../../../CrudApp/app/components/add/add.html',
                controller: 'addCtrl'
            });
    });
