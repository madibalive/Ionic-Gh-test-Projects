angular.module('projectM')
.controller('LoginCtrl',loginFunction  )
.service('loginService',serviceFunction);

function loginFunction ($scope,$state) {
	$scope.onLogin = function(){
        $state.go('app.home');
    }
}

function serviceFunction() {
    
}