angular.module("CrudApp").controller("addCtrl",function($scope,$location,$http,addfactory,$state){

    $scope.saveDet = function(){
        //alert("bd");
        var data = {"id":parseInt($scope.id),"name":$scope.name,"email":$scope.email};
        //alert("Here"+data.id);
        addfactory.calls(data).success(function(data){
            alert("Saved");
            $state.go('home');
        });

    }
});
