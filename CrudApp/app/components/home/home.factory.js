angular.module("CrudApp").factory("homefactory",function($http,$state){
//alert("in factory");
    return {
        list: function (){
           return $http({
                method: 'POST',
                url:'http://localhost:9000/student/all'
            })
        },
        calling: function(){
            $state.go('add');
        }
    };

});
