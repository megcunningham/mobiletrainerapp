angular
  .module('mobileTrainer')
  .factory('Auth', function($rootScope, $location, T_APP){
    var fb = new Firebase(T_APP);

    return{
      register: function(email, password, cb){
        console.log('hit auth factory')
        fb.createUser({email:email, password:password}, function(err, authData){
          if(err){
            console.log(err);
          }else{
            $rootScope.auth = authData;
            cb();
          }
        })
      },
      login: function(email, password, cb){
        fb.authWithPassword({email:email, password:password}, function(err, authData){
          if(err){
            console.log(err);
          }else{
            $rootScope.auth = authData;
            cb();
          }

        })
      },
      logout: function(cb){
        fb.unauth(function(){
          $rootScope.auth = null;
          cb();
        })
      }
    }
  });