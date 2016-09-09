angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.compose', {
    url: '/compose',
    views: {
      'tab1': {
        templateUrl: 'templates/compose.html',
        controller: 'composeCtrl'
      }
    }
  })

  .state('tabsController.myKritiks', {
    url: '/kritiks',
    views: {
      'tab2': {
        templateUrl: 'templates/myKritiks.html',
        controller: 'myKritiksCtrl'
      }
    }
  })

   .state('tabsController.kritikView', {
    url: '/kritik/:id',
    params: {
      kritik: null
    },
    views: {
      'tab2': {
        templateUrl: 'templates/viewKritik.html',
        controller: 'ViewKritikCtrl'
      }
    }
  })

  .state('tabsController.favourites', {
    url: '/favs',
    views: {
      'tab3': {
        templateUrl: 'templates/favourites.html',
        controller: 'favouritesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

 

$urlRouterProvider.otherwise('/tab/kritiks')

  

});