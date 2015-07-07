angular
  .module('mobileTrainer')

// Login controller

  .controller('AuthCtrl', function ($rootScope, $scope, $location, T_APP, Auth) {
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
      });
      var ref = new Firebase(T_APP);
       ref.push({ 'firstname': vm.reg.firstName, 'lastname': vm.reg.lastName, 'trainer' : vm.reg.trainer, 'email': vm.email });
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