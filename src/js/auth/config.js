angular
  .module('mobileTrainer')

  .config(function($routeProvider) {
    $routeProvider
       .when('/login', {
      	templateUrl:'src/views/login.html',
      	controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/', {
        templateUrl: 'src/views/main/trainingIndex.html',
        controller: 'trainingIndexCtrl'
    	})

      .when('/armlist', {
      	templateUrl:'src/views/main/armPage.html',
      	controller: 'ArmCtrl',
        controllerAs: 'arm'
       })

      .when('/backlist', {
      	templateUrl:'src/views/main/backPage.html',
      	controller: 'BackCtrl',
        controllerAs: 'back'
      })

      .when('/chestlist', {
      	templateUrl:'src/views/main/chestPage.html',
      	controller: 'ChestCtrl',
        controllerAs: 'chest'
      })

      .when('/leglist', {
      	templateUrl:'src/views/main/legPage.html',
      	controller: 'LegCtrl',
        controllerAs: 'leg'
      })

      .when('/shoulderlist', {
      	templateUrl:'src/views/main/shoulderPage.html',
      	controller: 'ShoulderCtrl',
        controllerAs: 'shoulder'
      });

    });












