//alert("here");
angular.module('CrudApp').controller('homeCtrl', function ($scope,$location,$http,homefactory){
  // alert("in function here");
    homefactory.list().success(function(d){
        $scope.datalist = d;
    });
    $scope.callAdd = function(){

        homefactory.calling()
    }
});


