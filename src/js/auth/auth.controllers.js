angular
  .module('mobileTrainer')

// Login controller

  .controller('AuthCtrl', function ($rootScope, $scope, $location) {
    var vm = this;

    vm.login = function () {
      Auth.login(vm.email, vm.password, function(){
        $location.path('/');
        $scope.$apply();
      })

    };

    vm.register = function () {
      console.log('hit register function')
      Auth.register(vm.email, vm.password, function(){
        console.log('you registered');
      })
    };


})

// Logout Controller 

  .controller('LogoutCtrl', function ($rootScope, $scope, $location) {
    var fb = new Firebase('T_APP');

    fb.unauth(function () {
      $rootScope.auth = null;
      $location.path('/login');
      $scope.$apply();
    });
  });